package py.com.progweb.prueba.rest;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.inject.Inject;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.ws.rs.Consumes;

import javax.ws.rs.POST;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;


import py.com.progweb.prueba.ejb.BolsaDAO;
import py.com.progweb.prueba.ejb.ClienteDAO;
import py.com.progweb.prueba.ejb.RangoDAO;
import py.com.progweb.prueba.ejb.ValeDAO;
import py.com.progweb.prueba.model.Bolsa;
import py.com.progweb.prueba.model.Cliente;
import py.com.progweb.prueba.model.Rango;
import py.com.progweb.prueba.model.Vale;




@Path("servicios")
@Consumes("application/json")
@Produces("application/json")
public class ServiciosRest {

    @Inject
    private RangoDAO rangodao;

    @Inject
    private ClienteDAO clientedao;

    @Inject
    private BolsaDAO bolsadao;

    @Inject
    private ValeDAO valedao;
    

    @POST
    @Path("/carga_de_puntos/{idCliente}&{monto}")
    public Response cargaDePuntos(@PathParam("idCliente") int idCliente,@PathParam("monto") int monto){ 
        List<Rango> rangos = rangodao.lista();
        for (Rango rango : rangos){
            if(rango.getLim_inf() <= monto && monto <= rango.getLim_sup() ){
                int puntos = monto / rango.getConversion();
                llenarBolsa(idCliente,puntos,monto);
                break;
            }
        }
        return Response.ok().build(); 
    }
    
    @POST
    @Path("/uso_de_puntos/{idCliente}&{idUso_detalle}")
    public Response utilizarPuntos(@PathParam("idCliente") String idCliente, @PathParam("idUso_detalle") int idUso_detalle){
        Vale vale = valedao.obtener_vale(idUso_detalle);
        int puntosVale = vale.getptsRequeridos();
        Cliente cliente = clientedao.obtener_cliente(idCliente);
        List<Bolsa> bolsas = bolsadao.lista_cliente(idCliente);
        int totalPuntosCliente = getTotalPuntosCliente(bolsas);

        if(totalPuntosCliente >= puntosVale){
            for(Bolsa bolsa : bolsas){
                int saldoBolsa = bolsa.getptsSaldo();
                if(saldoBolsa > 0 ){
                    if(saldoBolsa - puntosVale <= 0 ){
                        bolsa.setptsSaldo(0);  
                    }else{
                        bolsa.setptsSaldo(saldoBolsa - puntosVale);
                    }
                    bolsa.setptsUtilizados(bolsa.getptsUtilizados() + puntosVale);
                    bolsadao.agregar(bolsa);
                    puntosVale -= saldoBolsa;
                    
                    if(puntosVale <= 0 ){
                        enviarCorreo(cliente,"Se han canjeado exitosamente " + vale.getptsRequeridos() + " puntos!");
                        break;
                    } 
                }
            }

        }
        //else no tiene los puntos requeridos mandar mensaje de error? uwu
        return Response.ok().build(); 
    }

    private void enviarCorreo(Cliente cliente, String mensaje){
        final String username = "proyecto.backend.2021@gmail.com";
        final String password = "backend2021";

        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "465");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.socketFactory.port", "465");
        prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        
        Session session = Session.getInstance(prop,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("proyecto.backend.2021@gmail.com"));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(cliente.getEmail())
            );
            message.setSubject("CANJE DE VALES");
            message.setText("Señor/Señora/Señore " + cliente.getNombre() + " " + cliente.getApellido() + ","
                    + "\n\n" + mensaje);

            Transport.send(message);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
    
    
    @GET
    @Path("/consultar_puntos/{monto}")
    public Response consultarPuntos(@PathParam("monto") int monto){ 
        int puntos = 0;
        List<Rango> rangos = rangodao.lista();
        for (Rango rango : rangos){
            if(rango.getLim_inf() <= monto && monto <= rango.getLim_sup() ){
                puntos = monto / rango.getConversion();
                break;
            }
        }
        String message = "{\"puntos\": \"" + puntos +"\"}";

        return Response.ok(message).build(); 
    }

    private Cliente getCliente(int idCliente) {
    	Cliente result = new Cliente();
        List<Cliente> clientes = clientedao.lista();
        for(Cliente cliente : clientes)
            if(cliente.getidCliente() == idCliente)
                result = cliente;
        return result;
    }

    private void llenarBolsa(int idCliente,int puntos, int monto) {
        Cliente cliente = getCliente(idCliente);
        Bolsa bolsa = new Bolsa();
        bolsa.setCliente(cliente);
        bolsa.setmonto(monto);
        bolsa.setptsTotal(puntos);
        bolsa.setptsSaldo(puntos);
        bolsa.setptsUtilizados(0);
        bolsa.setfechaAsig(Date.from(Instant.now()));
        bolsa.setfechaCaduc(Date.from(Instant.now().plus( 7, ChronoUnit.DAYS)));
        this.bolsadao.agregar(bolsa);
    }

    private int getTotalPuntosCliente(List<Bolsa> bolsas) {
        int total = 0;
        for(Bolsa bolsa : bolsas)
            if(bolsa.getptsSaldo() > 0 )
                total += bolsa.getptsSaldo();
        return total;   
    }

}


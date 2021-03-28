package py.com.progweb.prueba.rest;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import py.com.progweb.prueba.ejb.BolsaDAO;
import py.com.progweb.prueba.ejb.ClienteDAO;
import py.com.progweb.prueba.ejb.RangoDAO;
import py.com.progweb.prueba.model.Bolsa;
import py.com.progweb.prueba.model.CargaPuntosMsg;
import py.com.progweb.prueba.model.Cliente;
import py.com.progweb.prueba.model.ConsultaPuntosMsg;
import py.com.progweb.prueba.model.Rango;
import py.com.progweb.prueba.model.UtilizarPuntosMsg;

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

    @POST
    @Path("/carga_de_puntos/{idCliente}&{monto}")
    public Response cargaDePuntos(@PathParam("idCliente") int idCliente,@PathParam("monto") int monto){ 
        List<Rango> rangos = rangodao.lista();
        Bolsa bolsa = new Bolsa();
        for (Rango rango : rangos){
            if(rango.getLim_inf() <= monto && monto <= rango.getLim_sup() ){
                int puntos = monto / rango.getConversion();
                bolsa = llenarBolsa(idCliente,puntos,monto);
                break;
            }
        }
        return Response.ok(bolsa).build(); 
    }
    
    @POST
    @Path("/uso_de_puntos/{idCliente}&{idUso_detalle}")
    public Response utilizarPuntos(@PathParam("idCliente") int idCliente, @PathParam("idUso_detalle") int idUso_detalle){
        
        return Response.ok().build(); 
    }
    
    @POST
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

    private bolsa llenarBolsa(int idCliente,int puntos, int monto) {
        Cliente cliente = getCliente(idCliente);
        Bolsa bolsa = new Bolsa();
        bolsa.setCliente(cliente);
        bolsa.setmonto(monto);
        bolsa.setptsTotal(puntos);
        bolsa.setptsSaldo(puntos);
        bolsa.setptsUtilizados(0);
        bolsa.setfechaAsig(Date.from(Instant.now()));
        bolsa.setfechaCaduc(Date.from(Instant.now().plus( 7, ChronoUnit.DAYS)));
        new BolsaDAO().agregar(bolsa);
        return bolsa;
    }

}


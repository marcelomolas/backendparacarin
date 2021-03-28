package py.com.progweb.prueba.rest;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

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


    @POST
    @Path("/cargaDePuntos")
    public Response cargaDePuntos(CargaPuntosMsg msg){ 
        int idCliente = msg.getidCliente();
        int monto = msg.getmonto();
        
        List<Rango> rangos = new RangoDAO().lista();
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
    @Path("/usoDePuntos")
    public Response utilizarPuntos(UtilizarPuntosMsg msg){ 
        int idCliente = msg.getidCliente();
        int idUso_detalle = msg.getidUso_detalle();
        
        
        return Response.ok().build(); 
    }
    
    @POST
    @Path("/consultarPuntos")
    public Response consultarPuntos(ConsultaPuntosMsg msg){ 
        int monto = msg.getmonto();
        int puntos = 0;
        List<Rango> rangos = new RangoDAO().lista();
        for (Rango rango : rangos){
            if(rango.getLim_inf() <= monto && monto <= rango.getLim_sup() ){
                puntos = monto / rango.getConversion();
                break;
            }
        }
        String message = "{\"puntos\": \"" + puntos +"\"}";

        return Response.ok(message).build(); 
    }

    private static Cliente getCliente(int idCliente) {
    	Cliente result = new Cliente();
        List<Cliente> clientes = new ClienteDAO().lista();
        for(Cliente cliente : clientes)
            if(cliente.getidCliente() == idCliente)
                result = cliente;
        return result;
    }

    private static void llenarBolsa(int idCliente,int puntos, int monto) {
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
    }

}


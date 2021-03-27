package py.com.progweb.prueba.rest;

import java.util.Date;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import py.com.progweb.prueba.ejb.ClienteDAO;
import py.com.progweb.prueba.ejb.Uso_cabeceraDAO;
import py.com.progweb.prueba.ejb.Uso_detalleDAO;
import py.com.progweb.prueba.ejb.BolsaDAO;

@Path("consultas")
@Consumes("application/json")
@Produces("application/json")
public class ConsultasRest {
    @Inject
    private ClienteDAO clienteDAO;

    @Inject
    private Uso_cabeceraDAO uso_cabeceraDAO;

    @Inject
    private Uso_detalleDAO uso_detalleDAO;

    @Inject
    private BolsaDAO bolsaDAO;

    @GET
    @Path("/uso_concepto")
    public Response listar_uso_concepto(){
        return Response.ok(uso_cabeceraDAO.lista()).build();
    }

    @GET
    @Path("/uso_fecha")
    public Response listar_uso_fecha(){
        return Response.ok(uso_cabeceraDAO.lista()).build();
    }

    @GET
    @Path("/uso_cliente")
    public Response listar_uso_cliente(){
        return Response.ok(uso_cabeceraDAO.lista()).build();
    }

    /*@GET
    @Path("/bolsa_cliente")
    public Response listar_bolsa_cliente(){
        return Response.ok(bolsaDAO.lista()).build();
    }

    @GET
    @Path("/bolsa_rango")
    public Response listar_bolsa_rango(){
        return Response.ok(bolsaDAO.lista()).build();
    }*/

    @GET
    @Path("/avencer")
    public Response lista_cliente_pts(Integer dias){
        return Response.ok(clienteDAO.lista()).build();
    }

    @GET
    @Path("/cliente_nombre")
    public Response lista_cliente_nombre(String nombre){
        return Response.ok(clienteDAO.lista()).build();
    }

    @GET
    @Path("/cliente_apellido")
    public Response lista_cliente_apellido(String apellido){
        return Response.ok(clienteDAO.lista()).build();
    }

    @GET
    @Path("/cliente_cumple")
    public Response lista_cliente_cumple(Date cumple){
        return Response.ok(clienteDAO.lista()).build();
    }
}
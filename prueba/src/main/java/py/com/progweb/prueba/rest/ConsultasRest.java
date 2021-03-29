package py.com.progweb.prueba.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import py.com.progweb.prueba.ejb.ClienteDAO;
import py.com.progweb.prueba.ejb.Uso_cabeceraDAO;
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
    private BolsaDAO bolsaDAO;

    @GET
    @Path("/usoconcepto/{concepto}")
    public Response listar_uso_concepto(@PathParam("concepto") String concepto){
        return Response.ok(uso_cabeceraDAO.lista_concepto(concepto)).build();
    }

    @GET
    @Path("/usofecha/{fecha}")
    public Response listar_uso_fecha(@PathParam("fecha") String fecha){
        return Response.ok(uso_cabeceraDAO.lista_fecha(fecha)).build();
    }

    @GET
    @Path("/usocliente/{idCliente}")
    public Response listar_uso_cliente(@PathParam("idCliente") String cliente){
        return Response.ok(uso_cabeceraDAO.lista_cliente(cliente)).build();
    }

    @GET
    @Path("/bolsacliente/{idCliente}")
    public Response listar_bolsa_cliente(@PathParam("idCliente") String cliente){
        return Response.ok(bolsaDAO.lista_cliente(cliente)).build();
    }

    @GET
    @Path("/bolsarango/{lim_inf}&{lim_sup}")
    public Response listar_bolsa_rango(@PathParam("lim_inf") String lim_inf, @PathParam("lim_sup") String lim_sup){
        return Response.ok(bolsaDAO.lista_rango(lim_inf, lim_sup)).build();
    }

    @GET
    @Path("/avencer/{dias}")
    public Response listar_vencimiento(@PathParam("dias") String dias){
        return Response.ok(bolsaDAO.lista_vencimiento(dias)).build();
    }

    @GET
    @Path("/clientenombre/{nombre}")
    public Response listar_cliente_nombre(@PathParam("nombre") String nombre){
        return Response.ok(clienteDAO.lista_nombre(nombre)).build();
    }

    @GET
    @Path("/clienteapellido/{apellido}")
    public Response listar_cliente_apellido(@PathParam("apellido") String apellido){
        return Response.ok(clienteDAO.lista_apellido(apellido)).build();
    }

    @GET
    @Path("/clientenac/{fecha}")
    public Response listar_cliente_nacimiento(@PathParam("fecha") String fecha){
        return Response.ok(clienteDAO.lista_nacimiento(fecha)).build();
    }
}
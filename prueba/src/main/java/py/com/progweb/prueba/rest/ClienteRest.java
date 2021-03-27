package py.com.progweb.prueba.rest;

import javax.inject.Inject;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import py.com.progweb.prueba.ejb.ClienteDAO;
import py.com.progweb.prueba.model.Cliente;

@Path("cliente")
@Consumes("application/json")
@Produces("application/json")
public class ClienteRest {
    @Inject
    private ClienteDAO clienteDAO;

    @GET
    @Path("/")
    public Response listar(){
        return Response.ok(clienteDAO.lista()).build();
    }

    @POST
    @Path("/")
    public Response crear(Cliente p){
        this.clienteDAO.agregar(p);
        return Response.ok().build();
    }

    @PUT
    @Path("/{id}")
    public Response actualizar(@PathParam("id") int id,Cliente p){
        this.clienteDAO.actualizar(id,p);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response eliminar(@PathParam("id") int id){
        this.clienteDAO.eliminar(id);
        return Response.ok().build();
    }
}

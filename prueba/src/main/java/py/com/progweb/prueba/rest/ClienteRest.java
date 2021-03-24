package py.com.progweb.prueba.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
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
    @Path("/")
    public Response actualizar(Cliente p){
        this.clienteDAO.actualizar(p);
        return Response.ok().build();
    }

    @DELETE
    @Path("/")
    public Response eliminar(Cliente p){
        this.clienteDAO.borrar(p);
        return Response.ok().build();
    }
}

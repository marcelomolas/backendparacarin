package py.com.progweb.prueba.rest;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import py.com.progweb.prueba.ejb.ValeDAO;
import py.com.progweb.prueba.model.Vale;

@Path("vale")
@Consumes("application/json")
@Produces("application/json")
public class ValeRest {
    @Inject
    private ValeDAO valeDAO;

    @GET
    @Path("/{id}")
    public Response listar(){
        return Response.ok(valeDAO.lista()).build();
    }

    @POST
    @Path("/")
    public Response crear(Vale v){
        this.valeDAO.agregar(v);
        return Response.ok().build();
    }

    @PUT
    @Path("/{id}")
    public Response actualizar(@PathParam("id") int id,Vale v){
        this.valeDAO.actualizar(id,v);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response eliminar(@PathParam("id") int id){
        this.valeDAO.eliminar(id);
        return Response.ok().build();
    }
}
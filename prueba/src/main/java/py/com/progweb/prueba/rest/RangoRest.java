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

import py.com.progweb.prueba.ejb.RangoDAO;
import py.com.progweb.prueba.model.Rango;

@Path("rango")
@Consumes("application/json")
@Produces("application/json")
public class RangoRest {
    @Inject
    private RangoDAO rangoDAO;

    @GET
    @Path("/")
    public Response listar(){
        return Response.ok(rangoDAO.lista()).build();
    }

    @POST
    @Path("/")
    public Response crear(Rango p){
        this.rangoDAO.agregar(p);
        return Response.ok().build();
    }

    @PUT
    @Path("/")
    public Response actualizar(Rango p){
        this.rangoDAO.actualizar(p);
        return Response.ok().build();
    }

    @DELETE
    @Path("/")
    public Response eliminar(Rango p){
        this.rangoDAO.borrar(p);
        return Response.ok().build();
    }
}

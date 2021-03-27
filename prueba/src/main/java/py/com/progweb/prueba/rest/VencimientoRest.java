package py.com.progweb.prueba.rest;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import py.com.progweb.prueba.ejb.VencimientoDAO;
import py.com.progweb.prueba.model.Vencimiento;

@Path("vencimiento")
@Consumes("application/json")
@Produces("application/json")
public class VencimientoRest {
    @Inject
    private VencimientoDAO vencimientoDAO;

    @GET
    @Path("/{id}")
    public Response listar(){
        return Response.ok(vencimientoDAO.lista()).build();
    }

    @POST
    @Path("/")
    public Response crear(Vencimiento v){
        this.vencimientoDAO.agregar(v);
        return Response.ok().build();
    }

    @PUT
    @Path("/{id}")
    public Response actualizar(@PathParam("id") int id,Vencimiento v){
        this.vencimientoDAO.actualizar(id,v);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response eliminar(@PathParam("id") int id){
        this.vencimientoDAO.eliminar(id);
        return Response.ok().build();
    }
}
package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Uso_detalle;

@Stateless
public class Uso_detalleDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Uso_detalle entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Uso_detalle> lista(){
        Query q = this.en.createQuery("select p from Uso_detalle p");
        return (List<Uso_detalle>) q.getResultList();
    }

    public void actualizar(Uso_detalle entidad){
    }

    public void borrar(Uso_detalle entidad){
        this.en.remove(entidad);
    }
}

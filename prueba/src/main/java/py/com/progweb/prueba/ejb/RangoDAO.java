package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Rango;

@Stateless
public class RangoDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Rango entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Rango> lista(){
        Query q = this.en.createQuery("select p from Rango p");
        return (List<Rango>) q.getResultList();
    }

    public void actualizar(int id, Rango entidad) {
        Rango q = this.en.merge(entidad);
    }
    
    public void eliminar(int id){
        Rango r = this.en.find(Rango.class, id);
        this.en.remove(r);
    }
}

package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Vale;

@Stateless
public class ValeDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Vale entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Vale> lista(){
        Query q = this.en.createQuery("select v from Vale v");
        return (List<Vale>) q.getResultList();
    }

    public void actualizar(int id, Vale entidad){
        this.en.merge(entidad);
    }

    public void eliminar(int id){
        Vale v = this.en.find(Vale.class, id);
        this.en.remove(v);
    }

    public Vale obtener_vale(int id){
        Vale v = this.en.find(Vale.class, id);
        return v;
    }
}

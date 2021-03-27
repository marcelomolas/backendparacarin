package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Vencimiento;

@Stateless
public class VencimientoDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Vencimiento entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Vencimiento> lista(){
        Query q = this.en.createQuery("select v from Vencimiento v");
        return (List<Vencimiento>) q.getResultList();
    }

    public void actualizar(int id, Vencimiento entidad){
        Vencimiento v = this.en.merge(entidad);
    }

    public void eliminar(int id){
        Vencimiento v = this.en.find(Vencimiento.class, id);
        this.en.remove(v);
    }
}
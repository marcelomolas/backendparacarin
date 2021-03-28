package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Uso_cabecera;

@Stateless
public class Uso_cabeceraDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Uso_cabecera entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Uso_cabecera> lista(){
        Query q = this.en.createQuery("select p from Uso_cabecera p");
        return (List<Uso_cabecera>) q.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Uso_cabecera> lista_concepto(String concepto){
        Query q = this.en.createQuery("select p from Uso_cabecera p where p.descripcion=" + concepto + "");
        return (List<Uso_cabecera>) q.getResultList();
    }

    @SuppressWarnings("unchecked")
    public List<Uso_cabecera> lista_fecha(String fecha){
        Query q = this.en.createQuery("select p from Uso_cabecera p where p.fecha='" + fecha + "'");
        return (List<Uso_cabecera>) q.getResultList();
    }

    @SuppressWarnings("unchecked")
    public List<Uso_cabecera> lista_cliente(String cliente){
        Query q = this.en.createQuery("select p from Uso_cabecera p where p.id_cliente=" + cliente + "");
        return (List<Uso_cabecera>) q.getResultList();
    }

    public void actualizar(int id, Uso_cabecera entidad) {
        Uso_cabecera q = this.en.merge(entidad);
    }
    
    public void eliminar(int id){
        Uso_cabecera q = this.en.find(Uso_cabecera.class, id);
        this.en.remove(q);
    }
}

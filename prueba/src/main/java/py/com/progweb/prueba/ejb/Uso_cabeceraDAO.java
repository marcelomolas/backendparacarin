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

    public void actualizar(Uso_cabecera entidad){
    }

    public void borrar(Uso_cabecera entidad){
        this.en.remove(entidad);
    }
}

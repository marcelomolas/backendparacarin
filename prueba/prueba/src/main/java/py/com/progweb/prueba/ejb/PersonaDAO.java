package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Persona;
//logica de negocios he'i
@Stateless
public class PersonaDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Persona entidad){
        this.en.persist(entidad);
    }

    public List<Persona> lista(){
        Query q = this.en.createQuery("select p from Persona p");
        return (List<Persona>) q.getResultList();
    }
}

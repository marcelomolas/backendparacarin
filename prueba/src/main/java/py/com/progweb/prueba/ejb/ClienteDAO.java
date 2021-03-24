package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Cliente;

@Stateless
public class ClienteDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Cliente entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Cliente> lista(){
        Query q = this.en.createQuery("select p from Cliente p");
        return (List<Cliente>) q.getResultList();
    }

    public void actualizar(Cliente entidad){
    }

    public void borrar(Cliente entidad){
        this.en.remove(entidad);
    }
}

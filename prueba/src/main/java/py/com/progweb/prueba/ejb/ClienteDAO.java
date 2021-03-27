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

    public void actualizar(int id, Cliente entidad) {
        Cliente c = this.en.merge(entidad);
    }

    public void eliminar(int id){
        Cliente c = this.en.find(Cliente.class, id);
        this.en.remove(c);
    }
}

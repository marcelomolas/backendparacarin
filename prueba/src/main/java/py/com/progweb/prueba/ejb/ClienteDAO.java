package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Bolsa;
import py.com.progweb.prueba.model.Cliente;

@Stateless
public class ClienteDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    @Inject
    private BolsaDAO bolsadao;

    public void agregar(Cliente entidad){
        this.en.persist(entidad);
        for(Bolsa bolsa : entidad.getListaBolsas())
            bolsadao.agregar(bolsa);
    }

    @SuppressWarnings("unchecked") 
    public List<Cliente> lista(){
        Query q = this.en.createQuery("select p from Cliente p");
        return (List<Cliente>) q.getResultList();
    }

    public void actualizar(int id, Cliente entidad) {
        Cliente c = this.en.merge(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Cliente> lista_nombre(String nombre){
        Query c = this.en.createQuery("select p from Cliente p where p.nombre LIKE '" + nombre + "%'");
        return (List<Cliente>) c.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Cliente> lista_apellido(String apellido){
        Query c = this.en.createQuery("select p from Cliente p where p.apellido LIKE '" + apellido + "%'");
        return (List<Cliente>) c.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Cliente> lista_nacimiento(String fecha){
        Query c = this.en.createQuery("select p from Cliente p where p.fecha_nac='" + fecha + "'");
        return (List<Cliente>) c.getResultList();
    }

    public void eliminar(int id){
        Cliente c = this.en.find(Cliente.class, id);
        this.en.remove(c);
    }

    public Cliente obtener_cliente(String id){
        Cliente c = this.en.find(Cliente.class, Integer.parseInt(id));
        return c;
    }
}

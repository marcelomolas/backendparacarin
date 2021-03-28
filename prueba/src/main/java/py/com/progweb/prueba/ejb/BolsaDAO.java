package py.com.progweb.prueba.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Bolsa;

@Stateless
public class BolsaDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    public void agregar(Bolsa entidad){
        this.en.persist(entidad);
    }

    @SuppressWarnings("unchecked") 
    public List<Bolsa> lista(){
        Query b = this.en.createQuery("select p from Bolsa p");
        return (List<Bolsa>) b.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Bolsa> lista_cliente(String cliente){
        Query b = this.en.createQuery("select p from Bolsa p where p.cliente=" + cliente + "");
        return (List<Bolsa>) b.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Bolsa> lista_rango(String lim_inf, String lim_sup){
        Query b = this.en.createQuery("select p from Bolsa p where p.saldo>=" + lim_inf + " AND p.saldo<=" + lim_sup + "");
        return (List<Bolsa>) b.getResultList();
    }

    public void actualizar(int id, Bolsa entidad) {
        Bolsa b = this.en.merge(entidad);
    }

    public void eliminar(int id){
        Bolsa b = this.en.find(Bolsa.class, id);
        this.en.remove(b);
    }
}
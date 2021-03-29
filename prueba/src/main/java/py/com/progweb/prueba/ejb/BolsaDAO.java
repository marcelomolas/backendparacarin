package py.com.progweb.prueba.ejb;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.ejb.Timer;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.Schedule;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import py.com.progweb.prueba.model.Bolsa;

@Stateless
public class BolsaDAO {
    @PersistenceContext(unitName = "pruebaPU")
    private EntityManager en;

    @TransactionAttribute(TransactionAttributeType.REQUIRED)
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
        Query b = this.en.createQuery("select p from Bolsa p where p.cliente=" + cliente + " ORDER BY p.fechaAsig ASC");
        return (List<Bolsa>) b.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Bolsa> lista_rango(String lim_inf, String lim_sup){
        Query b = this.en.createQuery("select p from Bolsa p where p.ptsSaldo BETWEEN " + lim_inf + " AND " + lim_sup + "");
        return (List<Bolsa>) b.getResultList();
    }

    @SuppressWarnings("unchecked") 
    public List<Bolsa> lista_vencimiento(String dias){
        Calendar fecha_actual = Calendar.getInstance();
        Calendar fecha_original = Calendar.getInstance();
        fecha_actual.add(Calendar.DAY_OF_MONTH, Integer.parseInt(dias));
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Query b = this.en.createQuery("select distinct p.cliente from Bolsa p where p.fechaCaduc BETWEEN '" + format.format(fecha_original.getTime()) + "' AND '" + format.format(fecha_actual.getTime()) + "'");
        return (List<Bolsa>) b.getResultList();
    }

    public void actualizar(int id, Bolsa entidad) {
        this.en.merge(entidad);
    }

    public void eliminar(int id){
        Bolsa b = this.en.find(Bolsa.class, id);
        this.en.remove(b);
    }

    @SuppressWarnings("unchecked") 
    @Schedule(hour = "*")
    public void verificarBolsa(final Timer timer){
        Calendar fecha_actual = Calendar.getInstance();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Query q = en.createQuery("select p from Bolsa p where p.fechaCaduc<='" + format.format(fecha_actual.getTime()) + "'");
        List<Bolsa> lista = q.getResultList();
        for(Bolsa bolsa: lista){
            bolsa.setptsSaldo(0);
            en.persist(bolsa);
        }
    }
}
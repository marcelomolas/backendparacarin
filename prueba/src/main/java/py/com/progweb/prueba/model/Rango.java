package py.com.progweb.prueba.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="rango")    
public class Rango {
    @Id 
    @Column(name = "id_rango")
    @Basic(optional = false)
    @GeneratedValue(generator = "rangoSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "rangoSec",sequenceName = "rango_sec", allocationSize = 0)
    private Integer idRango;
    @Column(name = "lim_inf")
    @Basic(optional = false)
    private Integer lim_inf = 0;
    @Column(name = "lim_sup")
    @Basic(optional = false)
    private Integer lim_sup = 100000000;
    @Column(name = "conversion")
    @Basic(optional = false)
    private Integer conversion;

    public Integer getidRango(){
        return idRango;
    }

    public void setidRango(Integer idRango) {
        this.idRango = idRango;
    }

    public Integer getLim_inf() {
        return lim_inf;
    }

    public void setLim_inf(Integer lim_inf) {
        this.lim_inf = lim_inf;
    }

    public Integer getLim_sup() {
        return lim_sup;
    }

    public void setLim_sup(Integer lim_sup) {
        this.lim_sup = lim_sup;
    }

    public Integer getConversion() {
        return conversion;
    }

    public void setConversion(Integer conversion) {
        this.conversion = conversion;
    }

    public Rango(){
    }
}

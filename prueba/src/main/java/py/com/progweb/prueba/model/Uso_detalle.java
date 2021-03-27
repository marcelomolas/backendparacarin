package py.com.progweb.prueba.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="uso_detalle") 
public class Uso_detalle {
    @Id
    @Column(name = "id_uso_detalle")
    @Basic(optional = false)
    @GeneratedValue(generator = "uso_detalleSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "uso_detalleSec",sequenceName = "uso_detalle_sec", allocationSize = 0)
    private Integer idUso_detalle;
    @Column(name = "id_uso_cabecera")
    @Basic(optional = false)
    private Integer idUso_cabecera;
    @Column(name = "id_bolsa")
    @Basic(optional = false)
    private Integer idBolsa;
    @Column(name = "fecha")
    @Basic(optional = false)
    private Date fecha;
    @Column(name = "pts_utilizados")
    @Basic(optional = false)
    private Integer pts_utilizados;

    public Integer getidUso_detalle(){
        return idUso_detalle;
    }

    public void setidUso_detalle(Integer idUso_detalle) {
        this.idUso_detalle = idUso_detalle;
    }

    public Integer getidUso_cabecera(){
        return idUso_cabecera;
    }

    public void setidUso_cabecera(Integer idUso_cabecera) {
        this.idUso_cabecera = idUso_cabecera;
    }

    public Integer getidBolsa() {
        return idBolsa;
    }

    public void setidBolsa(Integer idBolsa) {
        this.idBolsa = idBolsa;
    }

    public Integer getPts_utilizados() {
        return pts_utilizados;
    }

    public void setPts_utilizados(Integer pts_utilizados) {
        this.pts_utilizados = pts_utilizados;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Uso_detalle(){
    }
}

package py.com.progweb.prueba.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
    @JoinColumn(name = "id_uso_cabecera",referencedColumnName = "id_uso_cabecera")
    @ManyToOne(optional = false)
    private Uso_cabecera uso_cabecera;
    @JoinColumn(name = "id_bolsa",referencedColumnName = "id_bolsa")
    @OneToOne(optional = false)
    private Bolsa bolsa;
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

    public Uso_cabecera getUso_cabecera(){
        return uso_cabecera;
    }

    public void setUso_cabecera(Uso_cabecera uso_cabecera) {
        this.uso_cabecera = uso_cabecera;
    }

    public Bolsa getBolsa() {
        return bolsa;
    }

    public void setBolsa(Bolsa bolsa) {
        this.bolsa = bolsa;
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

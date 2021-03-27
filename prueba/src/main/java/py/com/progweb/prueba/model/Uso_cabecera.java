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
@Table(name="uso_cabecera")    
public class Uso_cabecera{
    @Id 
    @Column(name = "id_uso_cabecera")
    @Basic(optional = false)
    @GeneratedValue(generator = "uso_cabeceraSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "uso_cabeceraSec",sequenceName = "uso_cabecera_sec", allocationSize = 0)
    private Integer idUso_cabecera;
    @Column(name = "id_cliente")
    @Basic(optional = false)
    private Integer idCliente;
    @Column(name = "pts_utilizados")
    @Basic(optional = false)
    private Integer pts_utilizados;
    @Column(name = "fecha")
    @Basic(optional = false)
    private Date fecha;
    @Column(name = "descripcion", length = 200)
    @Basic(optional = false)
    private String descripcion;


    public Integer getidUso_cabecera(){
        return idUso_cabecera;
    }

    public void setidUso_cabecera(Integer idUso_cabecera) {
        this.idUso_cabecera = idUso_cabecera;
    }

    public Integer getidCliente() {
        return idCliente;
    }

    public void setidCliente(Integer idCliente) {
        this.idCliente = idCliente;
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Uso_cabecera(){
    }
}
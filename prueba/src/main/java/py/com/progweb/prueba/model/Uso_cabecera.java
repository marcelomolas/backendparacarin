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
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="uso_cabecera")    
public class Uso_cabecera{
    @Id
    @Column(name = "id_cabecera")
    @Basic(optional = false)
    @GeneratedValue(generator = "uso_cabeceraSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "uso_cabeceraSec",sequenceName = "uso_cabecera_sec", allocationSize = 0)
    private Integer idUso_cabecera;
    @JoinColumn(name = "id_cliente",referencedColumnName = "id_cliente")
    @ManyToOne(optional = false)
    private Cliente id_cliente;
    @Column(name = "pts_utilizados")
    @Basic(optional = false)
    private Integer pts_utilizados;
    @Column(name = "fecha")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Basic(optional = false)
    private Date fecha;
    @JoinColumn(name = "descripcion",referencedColumnName = "id_vale")
    @ManyToOne(optional = false)
    private Vale descripcion;

    public Integer getidUso_cabecera(){
        return idUso_cabecera;
    }

    public void setidUso_cabecera(Integer idUso_cabecera) {
        this.idUso_cabecera = idUso_cabecera;
    }

    public Cliente getCliente(){
        return id_cliente;
    }

    public void setCliente(Cliente id_cliente){
        this.id_cliente = id_cliente;
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

    public Vale getVale() {
        return descripcion;
    }

    public void setVale(Vale descripcion) {
        this.descripcion = descripcion;
    }

    public Uso_cabecera(){
    }
}
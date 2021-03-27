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

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="vencimiento")
public class Vencimiento{

    @Id 
    @Column(name = "id_venc")
    @Basic(optional = false)
    @GeneratedValue(generator = "vencimientoSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "vencimientoSec",sequenceName = "vencimiento_sec", allocationSize = 0)
    private Integer idVencimiento;
    @Column(name = "fecha_inicio")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Basic(optional = false)
    private Date fechaInicio;
    @Column(name = "fecha_fin")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Basic(optional = false)
    private Date fechaFin;
    @Column(name = "duracion")
    @Basic(optional = false)
    private Integer duracion;

    public void setidVencimiento(int idVencimiento){
        this.idVencimiento = idVencimiento;
    }

    public Integer getidVencimiento(){
        return this.idVencimiento;
    }

    public void setfechaInicio(Date fechaInicio){
        this.fechaInicio = fechaInicio;
    }

    public Date getfechaInicio(){
        return this.fechaInicio;
    }

    public void setfechaFin(Date fechaFin){
        this.fechaFin = fechaFin;
    }

    public Date getfechaFin(){
        return this.fechaFin;
    }

    public void setduracion(int duracion){
        this.duracion = duracion;
    }

    public Integer getduracion(){
        return this.duracion;
    }

    public Vencimiento(){}
}
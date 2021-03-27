package py.com.progweb.prueba.model;

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
@Table(name="vale")
public class Vale {
    @Id
    @Column(name = "id_vale")
    @Basic(optional = false)
    @GeneratedValue(generator = "valeSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "valeSec",sequenceName = "vale_sec", allocationSize = 0)
    private Integer idVale;
    @Column(name = "descripcion", length = 50)
    @Basic(optional = false)
    private String descripcion;
    @Column(name = "pts_requeridos")
    @Basic(optional = false)
    private Integer ptsRequeridos;

    public Integer getidVale(){
        return idVale;
    }
    public void setidVale(Integer idVale){
        this.idVale = idVale;
    }
    public String getdescripcion(){
        return descripcion;
    }
    public void setdescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    
    public Integer getptsRequeridos(){
        return ptsRequeridos;
    }
    public void setptsRequeridos(Integer ptsRequeridos){
        this.ptsRequeridos = ptsRequeridos;
    }

    public Vale() {
    }
}
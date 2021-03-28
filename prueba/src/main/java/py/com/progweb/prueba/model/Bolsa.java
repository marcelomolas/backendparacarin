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
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="bolsa")
public class Bolsa {
    @Id 
    @Column(name = "id_bolsa")
    @Basic(optional = false)
    @GeneratedValue(generator = "bolsaSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "bolsaSec",sequenceName = "bolsa_sec", allocationSize = 0)
    private Integer idBolsa;
    @JoinColumn(name = "id_cliente",referencedColumnName = "id_cliente")
    @ManyToOne(optional = false)
    private Cliente cliente;
    @Column(name = "fecha_asig")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Basic(optional = false)
    private Date fechaAsig;
    @Column(name = "fecha_caduc")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Basic(optional = false)
    private Date fechaCaduc;
    @Column(name = "pts_total")
    @Basic(optional = false)
    private Integer ptsTotal;
    @Column(name = "pts_utilizados")
    @Basic(optional = false)
    private Integer ptsUtilizados;
    @Column(name = "pts_saldo")
    @Basic(optional = false)
    private Integer ptsSaldo;
    @Column(name = "monto")
    @Basic(optional = false)
    private Integer monto;

    public Integer getidBolsa(){
        return this.idBolsa;
    }

    public void setidBolsa(int idBolsa){
        this.idBolsa = idBolsa;
    }

    public Cliente getCliente(){
        return this.cliente;
    }

    public void setCliente(Cliente cliente){
        this.cliente = cliente;
    }

    public Date getfechaAsig(){
        return this.fechaAsig;
    }

    public void setfechaAsig(Date fechaAsig){
        this.fechaAsig = fechaAsig;
    }

    public Date getfechaCaduc(){
        return this.fechaCaduc;
    }

    public void setfechaCaduc(Date fechaCaduc){
        this.fechaCaduc = fechaCaduc;
    }

    public Integer getptsTotal(){
        return this.ptsTotal;
    }

    public void setptsTotal(int ptsTotal){
        this.ptsTotal = ptsTotal;
    }

    public Integer getptsUtilizados(){
        return this.ptsUtilizados;
    }

    public void setptsUtilizados(int ptsUtilizados){
        this.ptsUtilizados = ptsUtilizados;
    }
    
    public Integer getptsSaldo(){
        return this.ptsSaldo;
    }

    public void setptsSaldo(int ptsSaldo){
        this.ptsSaldo = ptsSaldo;
    }

    public Integer getmonto(){
        return this.monto;
    }

    public void setmonto(int monto){
        this.monto = monto;
    }

    public Bolsa(){}
    
}
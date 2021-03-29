package py.com.progweb.prueba.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="cliente")
public class Cliente {
    @Id 
    @Column(name = "id_cliente")
    @Basic(optional = false)
    @GeneratedValue(generator = "clienteSec", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "clienteSec",sequenceName = "cliente_sec", allocationSize = 0)
    private Integer idCliente;
    @Column(name = "nombre", length = 50)
    @Basic(optional = false)
    private String nombre;
    @Column(name = "apellido", length = 50)
    @Basic(optional = false)
    private String apellido;
    @Column(name = "nro_documento")
    @Basic(optional = false)
    private Integer nro_documento;
    @Column(name = "tipo_documento", length = 50)
    @Basic(optional = false)
    private String tipo_documento;
    @Column(name = "nacionalidad", length = 50)
    @Basic(optional = false)
    private String nacionalidad;
    @Column(name = "email", length = 50)
    @Basic(optional = false)
    private String email;
    @Column(name = "telefono", length = 50)
    @Basic(optional = false)
    private String telefono;
    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_nac")
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "America/Asuncion")
    @Basic(optional = false)
    private Date fecha_nac;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "cliente", cascade = CascadeType.ALL)
    @JsonBackReference()
    private List<Bolsa> listaBolsas;

    public Integer getidCliente(){
        return idCliente;
    }

    public void setidCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    
    public Integer getNro_documento() {
        return nro_documento;
    }

    public void setNro_documento(Integer nro_documento) {
        this.nro_documento = nro_documento;
    }

    public String getTipo_documento() {
        return tipo_documento;
    }

    public void setTipo_documento(String tipo_documento) {
        this.tipo_documento = tipo_documento;
    }    
    
    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }    
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }    
    
    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }    

    public Date getFecha_nac() {
        return fecha_nac;
    }

    public void setFecha_nac(Date fecha_nac) {
        this.fecha_nac = fecha_nac;
    }    
    
    public Cliente() {
    }

    public List<Bolsa> getListaBolsas() {
        return listaBolsas;
    }

    public void setListaBolsas(List<Bolsa> listaBolsas) {
        this.listaBolsas = listaBolsas;
    }
}

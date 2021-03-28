package py.com.progweb.prueba.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


public class CargaPuntosMsg {
    private Integer idCliente;
    private Integer monto;

    

    public Integer getidCliente(){
        return idCliente;
    }

    public void setidCliente(int idCliente){
        this.idCliente = idCliente;
    }

    public Integer getmonto(){
        return monto;
    }

    public void setmonto(int monto){
        this.monto = monto;
    }

    public CargaPuntosMsg(){}
}
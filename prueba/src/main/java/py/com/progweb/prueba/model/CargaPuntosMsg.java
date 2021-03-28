package py.com.progweb.prueba.model;

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
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import {Table, TableBody, TextField, TableCell, TableContainer, TableHead, TableRow, makeStyles, Card,
        Button, Box, Menu, MenuItem} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        spacing: 8,
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
    }},
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    div: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}
    ))



function Consultas(){

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
        setShowConsultaVencimiento(true);
        setShowConsultaNombre(false);
        setShowConsultaApellido(false);
        setShowConsultaCumple(false);
    };

    const handleClose2 = () => {
        setAnchorEl1(null);
        setShowConsultaVencimiento(false);
        setShowConsultaNombre(true);
        setShowConsultaApellido(false);
        setShowConsultaCumple(false);
    };

    const handleClose3 = () => {
        setAnchorEl1(null);
        setShowConsultaVencimiento(false);
        setShowConsultaNombre(false);
        setShowConsultaApellido(true);
        setShowConsultaCumple(false);
    };

    const handleClose4 = () => {
        setAnchorEl1(null);
        setShowConsultaVencimiento(false);
        setShowConsultaNombre(false);
        setShowConsultaApellido(false);
        setShowConsultaCumple(true);
    };

    const handleClose5 = () => {
        setAnchorEl2(null);
        setShowConsultaUsoConcepto(true);
        setShowConsultaUsoFecha(false);
        setShowConsultaUsoCliente(false);
    };

    const handleClose6 = () => {
        setAnchorEl2(null);
        setShowConsultaUsoConcepto(false);
        setShowConsultaUsoFecha(true);
        setShowConsultaUsoCliente(false);
    };

    const handleClose7 = () => {
        setAnchorEl2(null);
        setShowConsultaUsoConcepto(false);
        setShowConsultaUsoFecha(false);
        setShowConsultaUsoCliente(true);
    };

    const handleClose8 = () => {
        setAnchorEl3(null);
        setShowConsultaBolsaCliente(true);
        setShowConsultaBolsaRango(false);
    };

    const handleClose9 = () => {
        setAnchorEl3(null);
        setShowConsultaBolsaCliente(false);
        setShowConsultaBolsaRango(true);
    };

    const handleCloseA = () => {
        setAnchorEl1(null);
        setShowConsultaVencimiento(false);
        setShowConsultaNombre(false);
        setShowConsultaApellido(false);
        setShowConsultaCumple(false);
    };

    const handleCloseB = () => {
        setAnchorEl2(null);
        setShowConsultaUsoConcepto(false);
        setShowConsultaUsoFecha(false);
        setShowConsultaUsoCliente(false);
    };

    const handleCloseC = () => {
        setAnchorEl3(null);
        setShowConsultaBolsaCliente(false);
        setShowConsultaBolsaRango(false);
    };

    const ConsultaVencimiento = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="dias"
                label="Dias hasta el vencimiento"
                type="number"
                value = {dias.dias} 
                onChange = {(event) => {
                    handleDiasChange("dias",event.target.value);onChange1(dias)
                }}
                onBlur = {(event) => {onChange1(dias)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Nro. Documento&nbsp;</TableCell>
                        <TableCell>Tipo Documento&nbsp;</TableCell>
                        <TableCell>Nacionalidad&nbsp;</TableCell>
                        <TableCell>Email&nbsp;</TableCell>
                        <TableCell>Telefono&nbsp;</TableCell>
                        <TableCell>Fecha de nacimiento&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((cliente) => (
                        <TableRow key={cliente.id}>
                        <TableCell component="th" scope="row">{cliente.idCliente}</TableCell>
                        <TableCell>{cliente.nombre}</TableCell>
                        <TableCell>{cliente.apellido}</TableCell>
                        <TableCell>{cliente.nro_documento}</TableCell>
                        <TableCell>{cliente.tipo_documento}</TableCell>
                        <TableCell>{cliente.nacionalidad}</TableCell>
                        <TableCell>{cliente.email}</TableCell>
                        <TableCell>{cliente.telefono}</TableCell>
                        <TableCell>{cliente.fecha_nac}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaNombre = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="nombre"
                label="Nombre del cliente"
                type="text"
                value = {nombre.nombre} 
                onChange = {(event) => {
                    handleNombreChange("nombre",event.target.value);onChange2(nombre)
                }}
                onBlur = {(event) => {onChange2(nombre)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Nro. Documento&nbsp;</TableCell>
                        <TableCell>Tipo Documento&nbsp;</TableCell>
                        <TableCell>Nacionalidad&nbsp;</TableCell>
                        <TableCell>Email&nbsp;</TableCell>
                        <TableCell>Telefono&nbsp;</TableCell>
                        <TableCell>Fecha de nacimiento&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((cliente) => (
                        <TableRow key={cliente.id}>
                        <TableCell component="th" scope="row">{cliente.idCliente}</TableCell>
                        <TableCell>{cliente.nombre}</TableCell>
                        <TableCell>{cliente.apellido}</TableCell>
                        <TableCell>{cliente.nro_documento}</TableCell>
                        <TableCell>{cliente.tipo_documento}</TableCell>
                        <TableCell>{cliente.nacionalidad}</TableCell>
                        <TableCell>{cliente.email}</TableCell>
                        <TableCell>{cliente.telefono}</TableCell>
                        <TableCell>{cliente.fecha_nac}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaApellido = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="apellido"
                label="Apellido del cliente"
                type="text"
                value = {apellido.apellido} 
                onChange = {(event) => {
                    handleApellidoChange("apellido",event.target.value);onChange3(apellido)
                }}
                onBlur = {(event) => {onChange3(apellido)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Nro. Documento&nbsp;</TableCell>
                        <TableCell>Tipo Documento&nbsp;</TableCell>
                        <TableCell>Nacionalidad&nbsp;</TableCell>
                        <TableCell>Email&nbsp;</TableCell>
                        <TableCell>Telefono&nbsp;</TableCell>
                        <TableCell>Fecha de nacimiento&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((cliente) => (
                        <TableRow key={cliente.id}>
                        <TableCell component="th" scope="row">{cliente.idCliente}</TableCell>
                        <TableCell>{cliente.nombre}</TableCell>
                        <TableCell>{cliente.apellido}</TableCell>
                        <TableCell>{cliente.nro_documento}</TableCell>
                        <TableCell>{cliente.tipo_documento}</TableCell>
                        <TableCell>{cliente.nacionalidad}</TableCell>
                        <TableCell>{cliente.email}</TableCell>
                        <TableCell>{cliente.telefono}</TableCell>
                        <TableCell>{cliente.fecha_nac}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaCumple = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="cumple"
                label="Fecha de nacimiento del cliente"
                type="date"
                value = {cumple.cumple} 
                onChange = {(event) => {
                    handleCumpleChange("cumple",event.target.value);onChange4(cumple)
                }}
                onBlur = {(event) => {onChange4(cumple)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Nro. Documento&nbsp;</TableCell>
                        <TableCell>Tipo Documento&nbsp;</TableCell>
                        <TableCell>Nacionalidad&nbsp;</TableCell>
                        <TableCell>Email&nbsp;</TableCell>
                        <TableCell>Telefono&nbsp;</TableCell>
                        <TableCell>Fecha de nacimiento&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((cliente) => (
                        <TableRow key={cliente.id}>
                        <TableCell component="th" scope="row">{cliente.idCliente}</TableCell>
                        <TableCell>{cliente.nombre}</TableCell>
                        <TableCell>{cliente.apellido}</TableCell>
                        <TableCell>{cliente.nro_documento}</TableCell>
                        <TableCell>{cliente.tipo_documento}</TableCell>
                        <TableCell>{cliente.nacionalidad}</TableCell>
                        <TableCell>{cliente.email}</TableCell>
                        <TableCell>{cliente.telefono}</TableCell>
                        <TableCell>{cliente.fecha_nac}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaUsoConcepto = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="concepto"
                label="ID del Concepto"
                type="number"
                value = {concepto.concepto} 
                onChange = {(event) => {
                    handleConceptoChange("concepto",event.target.value);onChange5(concepto)
                }}
                onBlur = {(event) => {onChange5(concepto)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Puntos Utilizados&nbsp;</TableCell>
                        <TableCell>Fecha&nbsp;</TableCell>
                        <TableCell>Descripcion&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((uso) => (
                        <TableRow key={uso.id}>
                        <TableCell component="th" scope="row">{uso.idUso_cabecera}</TableCell>
                        <TableCell>{uso.cliente.nombre}</TableCell>
                        <TableCell>{uso.cliente.apellido}</TableCell>
                        <TableCell>{uso.pts_utilizados}</TableCell>
                        <TableCell>{uso.fecha}</TableCell>
                        <TableCell>{uso.vale.descripcion}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaUsoFecha = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="fecha"
                label="Fecha de Uso"
                type="date"
                InputLabelProps={{ shrink: true }}
                value = {fecha.fecha} 
                onChange = {(event) => {
                    handleFechaChange("fecha",event.target.value);onChange6(fecha)
                }}
                onBlur = {(event) => {onChange6(fecha)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Puntos Utilizados&nbsp;</TableCell>
                        <TableCell>Fecha&nbsp;</TableCell>
                        <TableCell>Descripcion&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((uso) => (
                        <TableRow key={uso.id}>
                        <TableCell component="th" scope="row">{uso.idUso_cabecera}</TableCell>
                        <TableCell>{uso.cliente.nombre}</TableCell>
                        <TableCell>{uso.cliente.apellido}</TableCell>
                        <TableCell>{uso.pts_utilizados}</TableCell>
                        <TableCell>{uso.fecha}</TableCell>
                        <TableCell>{uso.vale.descripcion}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaUsoCliente = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="IDCliente1"
                label="ID del cliente"
                type="number"
                value = {IDCliente1.IDCliente1} 
                onChange = {(event) => {
                    handleIDCliente1Change("IDCliente1",event.target.value);onChange7(IDCliente1)
                }}
                onBlur = {(event) => {onChange7(IDCliente1)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Puntos Utilizados&nbsp;</TableCell>
                        <TableCell>Fecha&nbsp;</TableCell>
                        <TableCell>Descripcion&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((uso) => (
                        <TableRow key={uso.id}>
                        <TableCell component="th" scope="row">{uso.idUso_cabecera}</TableCell>
                        <TableCell>{uso.cliente.nombre}</TableCell>
                        <TableCell>{uso.cliente.apellido}</TableCell>
                        <TableCell>{uso.pts_utilizados}</TableCell>
                        <TableCell>{uso.fecha}</TableCell>
                        <TableCell>{uso.vale.descripcion}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaBolsaCliente = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                autoFocus
                margin="dense"
                id="IDCliente2"
                label="ID del cliente"
                type="number"
                value = {IDCliente2.IDCliente2} 
                onChange = {(event) => {
                    handleIDCliente2Change("IDCliente2",event.target.value);onChange8(IDCliente2)
                }}
                onBlur = {(event) => {onChange8(IDCliente2)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Fecha de Asignacion&nbsp;</TableCell>
                        <TableCell>Fecha de Vencimiento&nbsp;</TableCell>
                        <TableCell>Total de puntos&nbsp;</TableCell>
                        <TableCell>Puntos Utilizados&nbsp;</TableCell>
                        <TableCell>Saldo&nbsp;</TableCell>
                        <TableCell>Monto&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((bolsa) => (
                        <TableRow key={bolsa.id}>
                        <TableCell component="th" scope="row">{bolsa.idBolsa}</TableCell>
                        <TableCell>{bolsa.cliente.nombre}</TableCell>
                        <TableCell>{bolsa.cliente.apellido}</TableCell>
                        <TableCell>{bolsa.fechaAsig}</TableCell>
                        <TableCell>{bolsa.fechaCaduc}</TableCell>
                        <TableCell>{bolsa.ptsTotal}</TableCell>
                        <TableCell>{bolsa.ptsUtilizados}</TableCell>
                        <TableCell>{bolsa.ptsSaldo}</TableCell>
                        <TableCell>{bolsa.monto}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const ConsultaBolsaRango = (props) => {
        return(
            <TableContainer component={Card}>
                <div justifyContent='center'>
                <TextField
                margin="dense"
                id="lim_inf"
                autoFocus
                label="Rango Inferior"
                InputLabelProps={{ shrink: true }}
                type="number"
                value = {lim_inf.lim_inf} 
                onChange = {(event) => {
                    handleLim_InfChange("lim_inf",event.target.value);
                }}
                onBlur = {(event) => {onChange9(lim_inf, lim_sup)}}
                />
                </div>
                <div justifyContent='center'>
                <TextField
                margin="dense"
                id="lim_sup"
                autoFocus
                label="Rango Superior"
                InputLabelProps={{ shrink: true }}
                type="number"
                value = {lim_sup.lim_sup} 
                onChange = {(event) => {
                    handleLim_SupChange("lim_sup",event.target.value);
                }}
                onBlur = {(event) => {onChange9(lim_inf, lim_sup)}}
                />
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID&nbsp;</TableCell>
                        <TableCell>Nombre&nbsp;</TableCell>
                        <TableCell>Apellido&nbsp;</TableCell>
                        <TableCell>Fecha de Asignacion&nbsp;</TableCell>
                        <TableCell>Fecha de Vencimiento&nbsp;</TableCell>
                        <TableCell>Total de puntos&nbsp;</TableCell>
                        <TableCell>Puntos Utilizados&nbsp;</TableCell>
                        <TableCell>Saldo&nbsp;</TableCell>
                        <TableCell>Monto&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datos.map((bolsa) => (
                        <TableRow key={bolsa.id}>
                        <TableCell component="th" scope="row">{bolsa.idBolsa}</TableCell>
                        <TableCell>{bolsa.cliente.nombre}</TableCell>
                        <TableCell>{bolsa.cliente.apellido}</TableCell>
                        <TableCell>{bolsa.fechaAsig}</TableCell>
                        <TableCell>{bolsa.fechaCaduc}</TableCell>
                        <TableCell>{bolsa.ptsTotal}</TableCell>
                        <TableCell>{bolsa.ptsUtilizados}</TableCell>
                        <TableCell>{bolsa.ptsSaldo}</TableCell>
                        <TableCell>{bolsa.monto}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const handleDiasChange = (field, value) => setDias((prev) => ({ ...prev, [field]: value }));
    const handleNombreChange = (field, value) => setNombre((prev) => ({ ...prev, [field]: value }));
    const handleApellidoChange = (field, value) => setApellido((prev) => ({ ...prev, [field]: value }));
    const handleCumpleChange = (field, value) => setCumple((prev) => ({ ...prev, [field]: value }));
    const handleConceptoChange = (field, value) => setConcepto((prev) => ({ ...prev, [field]: value }));
    const handleFechaChange = (field, value) => setFecha((prev) => ({ ...prev, [field]: value }));
    const handleIDCliente1Change = (field, value) => setIDCliente1((prev) => ({ ...prev, [field]: value }));
    const handleIDCliente2Change = (field, value) => setIDCliente2((prev) => ({ ...prev, [field]: value }));
    const handleLim_InfChange = (field, value) => setLim_Inf((prev) => ({ ...prev, [field]: value }));
    const handleLim_SupChange = (field, value) => setLim_Sup((prev) => ({ ...prev, [field]: value }));
    const onChange1 = async (dias) => {
        await axios.get("http://localhost:8080/prueba/consultas/avencer/" + String(dias.dias))
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas clientes = {data} />
                }).catch(console.log);
    }
    const onChange2 = async (nombre) => {
        await axios.get("http://localhost:8080/prueba/consultas/clientenombre/" + nombre.nombre)
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas clientes = {data} />
                }).catch(console.log);
    }
    const onChange3 = async (apellido) => {
        await axios.get("http://localhost:8080/prueba/consultas/clienteapellido/" + apellido.apellido)
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas clientes = {data} />
                }).catch(console.log);
    }
    const onChange4 = async (cumple) => {
        await axios.get("http://localhost:8080/prueba/consultas/clientenac/" + String(cumple.cumple))
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas clientes = {data} />
                }).catch(console.log);
    }
    const onChange5 = async (concepto) => {
        await axios.get("http://localhost:8080/prueba/consultas/usoconcepto/" + concepto.concepto)
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas usos = {data} />
                }).catch(console.log);
    }
    const onChange6 = async (fecha) => {
        await axios.get("http://localhost:8080/prueba/consultas/usofecha/" + String(fecha.fecha))
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas usos = {data} />
                }).catch(console.log);
    }
    const onChange7 = async (IDCliente1) => {
        await axios.get("http://localhost:8080/prueba/consultas/usocliente/" + String(IDCliente1.IDCliente1))
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas usos = {data} />
                }).catch(console.log);
    }
    const onChange8 = async (IDCliente2) => {
        await axios.get("http://localhost:8080/prueba/consultas/bolsacliente/" + String(IDCliente2.IDCliente2))
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas bolsas = {data} />
                }).catch(console.log);
    }
    const onChange9 = async (lim_inf, lim_sup) => {
        await axios.get("http://localhost:8080/prueba/consultas/bolsarango/" + String(lim_inf.lim_inf) + '&' + String(lim_sup.lim_sup))
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Consultas bolsas = {data} />
                }).catch(console.log);
    }
    const [dias,setDias] = useState(
        {
            dias: 0,
        })
    const [nombre,setNombre] = useState(
        {
            nombre: "",
        })
    const [apellido,setApellido] = useState(
        {
            apellido: "",
        })
    const [cumple,setCumple] = useState(
        {
            cumple: "",
        })
    const [concepto,setConcepto] = useState(
        {
            concepto: "",
        })
    const [fecha,setFecha] = useState(
        {
            fecha: "",
        })
    const [IDCliente1,setIDCliente1] = useState(
        {
            IDCliente1: "",
        })
    const [IDCliente2,setIDCliente2] = useState(
        {
            IDCliente2: "",
        })
        
    const [lim_inf,setLim_Inf] = useState(
        {
            lim_inf: "",
        })
    const [lim_sup,setLim_Sup] = useState(
        {
            lim_sup: "",
        })
    const [datos,setDatos] = useState([])

    const classes = useStyles();

    const [showConsultaVencimiento, setShowConsultaVencimiento] = useState(false)
    const [showConsultaNombre, setShowConsultaNombre] = useState(false)
    const [showConsultaApellido, setShowConsultaApellido] = useState(false)
    const [showConsultaCumple, setShowConsultaCumple] = useState(false)
    const [showConsultaUsoConcepto, setShowConsultaUsoConcepto] = useState(false)
    const [showConsultaUsoFecha, setShowConsultaUsoFecha] = useState(false)
    const [showConsultaUsoCliente, setShowConsultaUsoCliente] = useState(false)
    const [showConsultaBolsaCliente, setShowConsultaBolsaCliente] = useState(false)
    const [ShowConsultaBolsaRango, setShowConsultaBolsaRango] = useState(false)

    return(
        <div>
        <h1>Consultas</h1>
        <Button aria-controls="simple-menu1" aria-haspopup="true" onClick={handleClick1} variant="contained" color="primary">
        Cliente
        </Button>
        <Button aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick2} variant="contained" color="primary">
        Uso
        </Button>
        <Button aria-controls="simple-menu3" aria-haspopup="true" onClick={handleClick3} variant="contained" color="primary">
        Bolsa
        </Button>
        <Menu
            id="simple-menu1"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleCloseA}
        >
            <MenuItem onClick={handleClose1}>Consulta de Cliente por Vencimiento</MenuItem>
            <MenuItem onClick={handleClose2}>Consulta de Cliente por Nombre</MenuItem>
            <MenuItem onClick={handleClose3}>Consulta de Cliente por Apellido</MenuItem>
            <MenuItem onClick={handleClose4}>Consulta de Cliente por Fecha de Nacimiento</MenuItem>
            <MenuItem onClick={handleCloseA}>Colapsar</MenuItem>
        </Menu>
        <Menu
            id="simple-menu2"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleCloseB}
        >
            <MenuItem onClick={handleClose5}>Consulta de Uso por Concepto</MenuItem>
            <MenuItem onClick={handleClose6}>Consulta de Uso por Fecha</MenuItem>
            <MenuItem onClick={handleClose7}>Consulta de Uso por Cliente</MenuItem>
            <MenuItem onClick={handleCloseB}>Colapsar</MenuItem>
        </Menu>
        <Menu
            id="simple-menu3"
            anchorEl={anchorEl3}
            keepMounted
            open={Boolean(anchorEl3)}
            onClose={handleCloseC}
        >
            <MenuItem onClick={handleClose8}>Consulta de Bolsa por Cliente</MenuItem>
            <MenuItem onClick={handleClose9}>Consulta de Bolsa por Rango</MenuItem>
            <MenuItem onClick={handleCloseC}>Colapsar</MenuItem>
        </Menu>
        <Box display='flex'>
            {showConsultaVencimiento ?
                <ConsultaVencimiento /> :
                null
            }
            {showConsultaNombre ?
                <ConsultaNombre /> :
                null
            }
            {showConsultaApellido ?
                <ConsultaApellido /> :
                null
            }
            {showConsultaCumple ?
                <ConsultaCumple /> :
                null
            }
            {showConsultaUsoConcepto ?
                <ConsultaUsoConcepto /> :
                null
            }
            {showConsultaUsoFecha ?
                <ConsultaUsoFecha /> :
                null
            }
            {showConsultaUsoCliente ?
                <ConsultaUsoCliente/> :
                null
            }
            {showConsultaBolsaCliente ?
                <ConsultaBolsaCliente/> :
                null
            }
            {ShowConsultaBolsaRango ?
                <ConsultaBolsaRango/> :
                null
            }
        </Box>
    </div>
    );
}

export default Consultas;
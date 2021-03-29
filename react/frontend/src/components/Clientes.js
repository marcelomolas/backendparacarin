import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import {Table, TableBody, TextField, TableCell, TableContainer, TableHead, TableRow, makeStyles, Card,
        Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        spacing: 8,
    },
    root: {
        minWidth: 275,
    },
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
    }
    })

function Clientes(){

    const [cliente,setCliente] = useState(
    {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      nro_documento: 0,
      tipo_documento: "",
      nacionalidad: "",
      fecha_nac: "",
    })
    const handleChange = (field, value) => setCliente((prev) => ({ ...prev, [field]: value }));
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen1 = () => {
    setCliente({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      nro_documento: 0,
      tipo_documento: "",
      nacionalidad: "",
      fecha_nac: "",
    });
    setOpen1(true);
    };
    const handleClose1 = () => {
    setOpen1(false);
    };
    const handleClickOpen2 = (cliente) => {
    setCliente(cliente)
    setOpen2(true);
    };
    const handleClose2 = () => {
    setOpen2(false);
    };
    const [datos,setDatos] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8080/prueba/cliente")
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Clientes clientes = {data} />
                }).catch(console.log);
    }, []);
    const classes = useStyles();

    const onSubmit1 = async (cliente) => {
        await axios.post('http://localhost:8080/prueba/cliente', cliente)
        .then(response => console.log(response)).catch(console.log);
        handleClose1();
    }

    const onSubmit2 = async (cliente) => {
        await axios.put('http://localhost:8080/prueba/cliente/' + String(cliente.idCliente), cliente)
        .then(response => console.log(response)).catch(console.log);
        handleClose2();
    }

    const onDelete = async (cliente) => {
        await axios.delete('http://localhost:8080/prueba/cliente/'+ String(cliente.idCliente))
        .then(response => console.log(response)).catch(console.log);
    }

    return(
        <div>
        <Box display='flex'>
            <TableContainer component={Card}>
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
                    <TableCell>Acciones&nbsp;</TableCell>
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
                    <TableCell>
                        <div>             
                        <Button variant="contained" color="primary" onClick = {() => handleClickOpen2(cliente)}>
                            EDITAR
                        </Button>
                        </div> 
                        <div>
                        <Button variant="contained" color="secondary" onClick = {() => onDelete(cliente)}>
                            BORRAR
                        </Button>
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Box>
        <div>
            <Button variant="contained" color="primary" onClick = {handleClickOpen1}>Agregar</Button>
        </div>
        <Dialog open={open1} onClose={handleClose1} aria-labelledby="form-dialog-title1">
            <DialogTitle id="form-dialog-title1">Agregar Cliente</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Complete los campos para agregar un nuevo cliente.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre"
            type="text"
            fullWidth
            value = {cliente.nombre} 
            onChange = {(event) => {
              handleChange("nombre",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="apellido"
            label="Apellido"
            type="text"
            fullWidth
            value = {cliente.apellido} 
            onChange = {(event) => {
              handleChange("apellido",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="nro_documento"
            label="Nro. documento"
            type="text"
            fullWidth
            value = {cliente.nro_documento} 
            onChange = {(event) => {
              handleChange("nro_documento",Number(event.target.value));
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="tipo_documento"
            label="Tipo de documento"
            type="text"
            fullWidth
            value = {cliente.tipo_documento} 
            onChange = {(event) => {
              handleChange("tipo_documento",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="nacionalidad"
            label="Nacionalidad"
            type="text"
            fullWidth
            value = {cliente.nacionalidad} 
            onChange = {(event) => {
              handleChange("nacionalidad",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value = {cliente.email} 
            onChange = {(event) => {
              handleChange("email",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="telefono"
            label="Telefono"
            type="tel"
            fullWidth
            value = {cliente.telefono} 
            onChange = {(event) => {
              handleChange("telefono",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="fecha_nac"
            label="Fecha de Nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value = {cliente.fecha_nac} 
            onChange = {(event) => {
              handleChange("fecha_nac",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit1(cliente)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title2">
            <DialogTitle id="form-dialog-title2">Editar Cliente</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Modifique los campos para editar el cliente.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre"
            type="text"
            fullWidth
            value = {cliente.nombre} 
            onChange = {(event) => {
              handleChange("nombre",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="apellido"
            label="Apellido"
            type="text"
            fullWidth
            value = {cliente.apellido} 
            onChange = {(event) => {
              handleChange("apellido",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="nro_documento"
            label="Nro. documento"
            type="text"
            fullWidth
            value = {cliente.nro_documento} 
            onChange = {(event) => {
              handleChange("nro_documento",Number(event.target.value));
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="tipo_documento"
            label="Tipo de documento"
            type="text"
            fullWidth
            value = {cliente.tipo_documento} 
            onChange = {(event) => {
              handleChange("tipo_documento",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="nacionalidad"
            label="Nacionalidad"
            type="text"
            fullWidth
            value = {cliente.nacionalidad} 
            onChange = {(event) => {
              handleChange("nacionalidad",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value = {cliente.email} 
            onChange = {(event) => {
              handleChange("email",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="telefono"
            label="Telefono"
            type="tel"
            fullWidth
            value = {cliente.telefono} 
            onChange = {(event) => {
              handleChange("telefono",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="fecha_nac"
            label="Fecha de Nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value = {cliente.fecha_nac} 
            onChange = {(event) => {
              handleChange("fecha_nac",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose2} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit2(cliente)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default Clientes;
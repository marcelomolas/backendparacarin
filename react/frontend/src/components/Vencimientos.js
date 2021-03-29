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

function Vencimientos(){

    const [vencimiento,setVencimiento] = useState(
    {
      fechaInicio: "",
      fechaFin: "",
      duracion: "",
    })
    const handleChange = (field, value) => setVencimiento((prev) => ({ ...prev, [field]: value }));
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen1 = () => {
    setVencimiento({
      fechaInicio: "",
      fechaFin: "",
      duracion: 0,
    });
    setOpen1(true);
    };
    const handleClose1 = () => {
    setOpen1(false);
    };
    const handleClickOpen2 = (vencimiento) => {
    setVencimiento(vencimiento)
    setOpen2(true);
    };
    const handleClose2 = () => {
    setOpen2(false);
    };
    const [datos,setDatos] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8080/prueba/vencimiento")
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Vencimientos vencimientos = {data} />
                }).catch(console.log);
    }, []);
    const classes = useStyles();

    const onSubmit1 = async (vencimiento) => {
        await axios.post('http://localhost:8080/prueba/vencimiento', vencimiento)
        .then(response => console.log(response)).catch(console.log);
        handleClose1();
    }

    const onSubmit2 = async (vencimiento) => {
        await axios.put('http://localhost:8080/prueba/vencimiento/' + String(vencimiento.idVencimiento), vencimiento)
        .then(response => console.log(response)).catch(console.log);
        handleClose2();
    }

    const onDelete = async (vencimiento) => {
        await axios.delete('http://localhost:8080/prueba/vencimiento/'+ String(vencimiento.idVencimiento))
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
                    <TableCell>Fecha de Inicio&nbsp;</TableCell>
                    <TableCell>Fecha de Vencimiento&nbsp;</TableCell>
                    <TableCell>Duracion&nbsp;</TableCell>
                    <TableCell>Acciones&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {datos.map((vencimiento) => (
                    <TableRow key={vencimiento.id}>
                    <TableCell component="th" scope="row">{vencimiento.idVencimiento}</TableCell>
                    <TableCell>{vencimiento.fechaInicio}</TableCell>
                    <TableCell>{vencimiento.fechaFin}</TableCell>
                    <TableCell>{vencimiento.duracion}</TableCell>
                    <TableCell>
                        <div>             
                        <Button variant="contained" color="primary" onClick = {() => handleClickOpen2(vencimiento)}>
                            EDITAR
                        </Button>
                        </div> 
                        <div>
                        <Button variant="contained" color="secondary" onClick = {() => onDelete(vencimiento)}>
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
            <DialogTitle id="form-dialog-title1">Agregar vencimiento</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Complete los campos para agregar un nuevo vencimiento.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="fechaInicio"
            label="Fecha de Inicio"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value = {vencimiento.fechaInicio} 
            onChange = {(event) => {
              handleChange("fechaInicio",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="fechaFin"
            label="Fecha de Vencimiento"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value = {vencimiento.fechaFin} 
            onChange = {(event) => {
              handleChange("fechaFin",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="duracion"
            label="duracion"
            type="number"
            fullWidth
            value = {vencimiento.duracion} 
            onChange = {(event) => {
              handleChange("duracion",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit1(vencimiento)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title2">
            <DialogTitle id="form-dialog-title2">Editar vencimiento</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Modifique los campos para editar el vencimiento.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="fechaInicio"
            label="Fecha de Inicio"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value = {vencimiento.fechaInicio} 
            onChange = {(event) => {
              handleChange("fechaInicio",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="fechaFin"
            label="Fecha de Vencimiento"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value = {vencimiento.fechaFin} 
            onChange = {(event) => {
              handleChange("fechaFin",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="duracion"
            label="Duracion"
            type="number"
            fullWidth
            value = {vencimiento.duracion} 
            onChange = {(event) => {
              handleChange("duracion",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose2} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit2(vencimiento)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default Vencimientos;
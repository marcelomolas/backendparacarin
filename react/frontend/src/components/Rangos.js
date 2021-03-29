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

function Rangos(){

    const [rango,setRango] = useState(
    {
      lim_inf: 0,
      lim_sup: 0,
      conversion: 0,
    })
    const handleChange = (field, value) => setRango((prev) => ({ ...prev, [field]: value }));
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen1 = () => {
    setRango({
      lim_inf: 0,
      lim_sup: 0,
      conversion: 0,
    });
    setOpen1(true);
    };
    const handleClose1 = () => {
    setOpen1(false);
    };
    const handleClickOpen2 = (rango) => {
    setRango(rango)
    setOpen2(true);
    };
    const handleClose2 = () => {
    setOpen2(false);
    };
    const [datos,setDatos] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8080/prueba/rango")
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Rangos rangos = {data} />
                }).catch(console.log);
    }, []);
    const classes = useStyles();

    const onSubmit1 = async (rango) => {
        await axios.post('http://localhost:8080/prueba/rango', rango)
        .then(response => console.log(response)).catch(console.log);
        handleClose1();
    }

    const onSubmit2 = async (rango) => {
        await axios.put('http://localhost:8080/prueba/rango/' + String(rango.idRango), rango)
        .then(response => console.log(response)).catch(console.log);
        handleClose2();
    }

    const onDelete = async (rango) => {
        await axios.delete('http://localhost:8080/prueba/rango/'+ String(rango.idRango))
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
                    <TableCell>Limite Inferior&nbsp;</TableCell>
                    <TableCell>Limite Superior&nbsp;</TableCell>
                    <TableCell>Conversion&nbsp;</TableCell>
                    <TableCell>Acciones&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {datos.map((rango) => (
                    <TableRow key={rango.id}>
                    <TableCell component="th" scope="row">{rango.idRango}</TableCell>
                    <TableCell>{rango.lim_inf}</TableCell>
                    <TableCell>{rango.lim_sup}</TableCell>
                    <TableCell>{rango.conversion}</TableCell>
                    <TableCell>
                        <div>             
                        <Button variant="contained" color="primary" onClick = {() => handleClickOpen2(rango)}>
                            EDITAR
                        </Button>
                        </div> 
                        <div>
                        <Button variant="contained" color="secondary" onClick = {() => onDelete(rango)}>
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
            <DialogTitle id="form-dialog-title1">Agregar rango</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Complete los campos para agregar un nuevo rango.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="lim_inf"
            label="Limite Superior"
            type="number"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value = {rango.lim_inf} 
            onChange = {(event) => {
              handleChange("lim_inf",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="lim_sup"
            label="Limite Superior"
            type="number"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value = {rango.lim_sup} 
            onChange = {(event) => {
              handleChange("lim_sup",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="conversion"
            label="Conversion"
            type="number"
            fullWidth
            value = {rango.conversion} 
            onChange = {(event) => {
              handleChange("conversion",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit1(rango)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title2">
            <DialogTitle id="form-dialog-title2">Editar rango</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Modifique los campos para editar el rango.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="lim_inf"
            label="Limite Inferior"
            type="number"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value = {rango.lim_inf} 
            onChange = {(event) => {
              handleChange("lim_inf",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="lim_sup"
            label="Limite Superior"
            type="number"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value = {rango.lim_sup} 
            onChange = {(event) => {
              handleChange("lim_sup",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="conversion"
            label="Conversion"
            type="number"
            fullWidth
            value = {rango.conversion} 
            onChange = {(event) => {
              handleChange("conversion",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose2} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit2(rango)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default Rangos;
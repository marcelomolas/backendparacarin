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

function Vales(){

    const [vale,setVale] = useState(
    {
      descripcion: "",
      ptsRequeridos: 0,
    })
    const handleChange = (field, value) => setVale((prev) => ({ ...prev, [field]: value }));
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen1 = () => {
    setVale({
      descripcion: "",
      ptsRequeridos: "",
    });
    setOpen1(true);
    };
    const handleClose1 = () => {
    setOpen1(false);
    };
    const handleClickOpen2 = (vale) => {
    setVale(vale)
    setOpen2(true);
    };
    const handleClose2 = () => {
    setOpen2(false);
    };
    const [datos,setDatos] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8080/prueba/vale")
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Vales vales = {data} />
                }).catch(console.log);
    }, []);
    const classes = useStyles();

    const [isValid, setIsValid] = useState(true)
    useEffect( async () => {
            await axios.get("http://localhost:8080/prueba/vale")
                            .then(response => response.data).then(data => {
                console.log(data);
                setDatos(data);
                return <Vales vales = {data} />
                }).catch(console.log);
            setIsValid(true);
    }, [isValid]);

    const onSubmit1 = async (vale) => {
        await axios.post('http://localhost:8080/prueba/vale', vale)
        .then(response => console.log(response)).catch(console.log);
        handleClose1();
    }

    const onSubmit2 = async (vale) => {
        await axios.put('http://localhost:8080/prueba/vale/' + String(vale.idVale), vale)
        .then(response => console.log(response)).catch(console.log);
        handleClose2();
    }

    const onDelete = async (vale) => {
        await axios.delete('http://localhost:8080/prueba/vale/'+ String(vale.idVale))
        .then(response => console.log(response)).catch(console.log);
    }

    return(
        <div>
        <h1>Vales</h1>
        <Box display='flex'>
            <TableContainer component={Card}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID&nbsp;</TableCell>
                    <TableCell>Descripcion&nbsp;</TableCell>
                    <TableCell>Puntos Requeridos&nbsp;</TableCell>
                    <TableCell>Acciones&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {datos.map((vale) => (
                    <TableRow key={vale.id}>
                    <TableCell component="th" scope="row">{vale.idVale}</TableCell>
                    <TableCell>{vale.descripcion}</TableCell>
                    <TableCell>{vale.ptsRequeridos}</TableCell>
                    <TableCell>
                        <div>             
                        <Button variant="contained" color="primary" onClick = {() => handleClickOpen2(vale)}>
                            EDITAR
                        </Button>
                        </div> 
                        <div>
                        <Button variant="contained" color="secondary" onClick = {() => {onDelete(vale);setIsValid(false)}}>
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
            <DialogTitle id="form-dialog-title1">Agregar vale</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Complete los campos para agregar un nuevo vale.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="descripcion"
            label="Descripcion"
            type="text"
            fullWidth
            value = {vale.descripcion} 
            onChange = {(event) => {
              handleChange("descripcion",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="ptsRequeridos"
            label="Puntos Requeridos"
            type="number"
            fullWidth
            value = {vale.ptsRequeridos} 
            onChange = {(event) => {
              handleChange("ptsRequeridos",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit1(vale);setIsValid(false)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title2">
            <DialogTitle id="form-dialog-title2">Editar vale</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Modifique los campos para editar el vale.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="descripcion"
            label="Descripcion"
            type="text"
            fullWidth
            value = {vale.descripcion} 
            onChange = {(event) => {
              handleChange("descripcion",event.target.value);
            }}
            />
            <TextField
            autoFocus
            margin="dense"
            id="ptsRequeridos"
            label="Puntos Requeridos"
            type="number"
            fullWidth
            value = {vale.ptsRequeridos} 
            onChange = {(event) => {
              handleChange("ptsRequeridos",event.target.value);
            }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose2} color="primary">
            Cancelar
            </Button>
            <Button onClick={() => {onSubmit2(vale);setIsValid(false)}} color="primary">
            Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default Vales;
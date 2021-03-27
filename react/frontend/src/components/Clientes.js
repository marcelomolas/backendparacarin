import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, Card,
        Button, Box} from '@material-ui/core';

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

    const [datos,setDatos] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8080/prueba/cliente")
                .then(response => response.data).then(data => {
                setDatos(data);
                return <Clientes clientes = {data} />
                }).catch(console.log);
    }, []);
    
    const classes = useStyles();

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
            <div >
                <Button variant="contained" color="primary" onClick="displayAgregarCliente()">
                    AGREGAR
                </Button>
            </div>
            </TableContainer>
        </Box>
        </div>
    );
}

export default Clientes;
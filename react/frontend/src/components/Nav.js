import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {AppBar, Button, Toolbar} from '@material-ui/core'

function Nav(){

    const navStyle = {
        color: 'white'
    };

    return (
        <div>
            <AppBar position="static" color='primary'>
                <Toolbar>
                <Button>
                    <Link style={navStyle} to='/'>Inicio</Link>
                </Button>
                <Button>
                    <Link style={navStyle} to='/clientes'>Clientes</Link>
                </Button>
                <Button>
                    <Link style={navStyle} to='/puntos'>Puntos</Link>
                </Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Nav;

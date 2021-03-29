import React from 'react'
import Nav from './components/Nav'
import Clientes from './components/Clientes'
import Vales from './components/Vales'
import Rangos from './components/Rangos'
import Vencimientos from './components/Vencimientos'
import Consultas from './components/Consultas'
import Servicios from './components/Servicios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/vales" component={Vales} />
          <Route path="/rangos" component={Rangos} />
          <Route path="/vencimientos" component={Vencimientos} />
          <Route path="/consultas" component={Consultas} />
          <Route path="/servicios" component={Servicios} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Backend</h1>
  </div>
);

export default App;
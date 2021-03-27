import React from 'react'
import Nav from './components/Nav'
import Clientes from './components/Clientes'
import Puntos from './components/Puntos'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/puntos" component={Puntos} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
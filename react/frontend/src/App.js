import React,{useState,useEffect} from 'react'
import axios from 'axios';
function App() {

  const [datos,setDatos] = useState([])
  useEffect(() => {
      // GET request using fetch inside useEffect React hook
       axios.get("http://localhost:8080/prueba/cliente")
              .then(response => response.data).then(data => {
                console.log(data);
                return setDatos(data)
              }).catch(console.log);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
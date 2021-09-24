import React, {useState} from 'react';
import './App.css';
import Formulario from './Components/Formulario.jsx'
import Gastos from './Components/Gastos.jsx'

function App() {

const [presupuesto, guardarPresupuesto] = useState()


const setPresupuesto = monto => guardarPresupuesto(monto)
  return (
    <div className="App">
        <h1>Gastos Semanales</h1>
        <div className='App_1'>
        {!presupuesto ? < Formulario 
         setPresupuesto={setPresupuesto}/> : 
         <Gastos 
         presupuesto={presupuesto}/>
         }
        </div>
         
    </div>
  );
}

export default App;

//a commit
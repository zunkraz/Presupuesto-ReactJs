import React, {useState} from 'react';
import '../Styles/Formulario.css'

const Formulario = ({setPresupuesto}) => {

const [monto,setMonto] = useState()

//Functions
const handleChange = (e) => {
   setMonto(parseInt(e.target.value))
}

const handleSubmit = (e) => {
    e.preventDefault()
    setPresupuesto(monto)
}

const disable = () =>{
    if(monto >= 10){
        return false;
    }else{
        return true;
    }
}
/////////////
return ( 
    <div>
        <h2>Coloque su presupuesto (USD)</h2>
        
        <form onSubmit={handleSubmit} className='Formulario'>
        {monto < 10 ? <h3 className='dangerInit'>Ingrese un monto mayor a $10</h3> : null}
            <input 
            className='inputInit'
            type="number"
            placeholder='Coloca tu Presupuesto acá'
            name='monto'
            onChange={handleChange}
             />

             <button 
             className='btnInit'
             disabled={disable()}
             >Agregar Monto</button>
        </form> 
    </div>
     );
}
 
export default Formulario;
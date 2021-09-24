import React, { useState, useRef } from 'react';
import {v4 as uuidv4} from 'uuid'
import '../Styles/FormuItems.css'
import { revisarPresupuesto} from '../helpers.js'

const FormuItems = ({guardarItem, presupuesto}) => {
// hooks

const [errors,setError] = useState({});
const [restante, setResante] = useState(presupuesto);

const refNombre = useRef('')
const refPrecio = useRef('')



//functions
const handleSubmit = (e) => {
    e.preventDefault();

    //validaciones
    if(!refNombre.current.value && !refPrecio.current.value){
        return setError({
            ...errors,
            precio: 'Los campos no pueden estar vacíos',
            danger: true,
        })
    }else if(refPrecio.current.value < 0 || refPrecio.current.value > restante || !refPrecio.current.value){
        refPrecio.current.value = '';
        return setError({
            ...errors,
            precio: 'El Monto no es válido',
            danger: true,
        })
    }
    else if(!refNombre.current.value){
        return setError({
            ...errors,
            nombre: 'El campo no puede estar vacío',
            danger: true,
        })
    }
    setError({
        nombre: '',
        precio: ''})

    setResante(restante - refPrecio.current.value)
    guardarItem(
        {nombre:refNombre.current.value,
        precio: refPrecio.current.value,
        id: uuidv4()})
            
    refPrecio.current.value = '';
    refNombre.current.value = '';
}

    return ( 
        <div className='containerForm'>
            <form autoComplete='off' onSubmit={handleSubmit}>
            <label className='labelOne'> Nombre Gasto</label>
                    {errors.nombre && <p>{errors.nombre}</p>}
                    <input
                    className='inputForm'
                    type="text"
                    placeholder='Ej. Transporte'
                    name='nombre'
                    ref={refNombre}
                     />
                    
                    <label >Cantidad Gasto</label>
                    {errors.precio && <p className='danger'>{errors.precio}</p>}
                    <input 
                    className='inputForm'
                    type="number"
                    name='precio'
                    placeholder='0'
                    ref={refPrecio}
                    />
            <button className='btnForm'>Agregar Gasto</button>
            </form>

            <p className='presupuesto'><span>Presupuesto:</span>  ${presupuesto}</p>
            <p className={revisarPresupuesto(presupuesto,restante)} ><span>Restante:</span> ${restante}</p>
        </div>
     );
}
 
export default FormuItems;
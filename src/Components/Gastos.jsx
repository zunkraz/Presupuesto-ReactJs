import React, {useState, Fragment} from 'react';
import FormuItems from './FormuItems.jsx'
import Listado from './Listado.jsx'
import '../Styles/Gastos.css'

const Gastos = ({presupuesto}) => {
const [articulo, setArticulo] = useState([])



//functions
const guardarItem = (item) => {
    setArticulo([
        ...articulo,
        item])
}
const eliminarArticulo = (id) => {
    setArticulo(articulo.filter(p => p.id !== id))
}
/////////////////////
return ( 
        <div className='container'>
            <div>
            <FormuItems
            guardarItem={guardarItem}
            presupuesto={presupuesto}
            />
            </div>
            <div>
            {articulo.length > 0 ? articulo.map(p => 
            <Listado 
            id={p.id}
            nombre={p.nombre}
            precio={p.precio}
            eliminarArticulo={eliminarArticulo}/>
        ) : null}
            </div>

        </div>
     );
}
 
export default Gastos;
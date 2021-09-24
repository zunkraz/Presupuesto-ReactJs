import React from 'react';
import '../Styles/Listado.css'

const Listado = ({id,nombre,precio,eliminarArticulo}) => {
return ( 
        <div className='items'> 
            <div className='item'>&#8227; {nombre}:<span className='value'>${precio}</span>
            {/* <button className='btnDelete' onClick={() => eliminarArticulo(id)}>X</button> */}
            </div>    
        </div>
     );
}
 
export default Listado;
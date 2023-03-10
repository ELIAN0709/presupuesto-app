import React from 'react'
import Gasto from './Gasto';
import { PropTypes } from 'prop-types';

const Listado = ({gastos}) => {
    return ( 
        <div className='gastos-realizados'>
            <h2>listado</h2>
            {gastos.map((gasto)=>(
                <Gasto
                key={gasto.id} 
                gasto={gasto}
                />
            ))}
        </div>
     );
}

// documentacion de los PropTypes
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;

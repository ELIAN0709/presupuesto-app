import React , {useState} from 'react'
import { PropTypes } from 'prop-types';
import Error from './Error'
import shortid from 'shortid';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    // definir el control de estado
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState();
    const [error, guardardaError] = useState(false)

    // defnir una funcion para agregar el gato
    const agregarGasto = (event) => {
        event.preventDefault();

        // validar el gasto
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardardaError(true);
            return;
        }
        guardardaError(false);

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate(),

        }
        console.log(gasto)


        // pasar el gasto al componente padre
        guardarGasto(gasto);
        guardarCrearGasto(true)


        // vaciar el formulario para un nuevo ingreso
        guardarNombre('');
        guardarCantidad('')
    }


    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error msm="Ambos campos sonobligatorios"/> : null }


            <div className="campo">
                <label> Nombre Gasto</label>
                <input 
                type="text"
                className='u-full-width'
                placeholder='Ej. compra'
                value={nombre}
                onChange={(event) => guardarNombre(event.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                type="number"
                className='u-full-width'
                placeholder='Ej. 400'
                value={cantidad}
                onChange={(event) => guardarCantidad(parseInt(event.target.value))}
                />
            </div>

            <input 
            type="submit" 
            className='button-primary u-full-width'
            value="Agregar Gasto"/>
        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

 
export default Formulario;
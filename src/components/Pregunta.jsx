import React, { Fragment, useState } from "react";
import Error from "./Error";
import { PropTypes } from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
  // estado de cantidad
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // funcion que va a leer el presupuesto
  const definirPresupuesto = (evento) => {
    guardarCantidad(parseInt(evento.target.value, 10));
    //console.log(parseInt(evento.target.value, 10))
  };

  // submit para definir el presupuesto
  const agregarPresupuesto = (evento) => {
    evento.preventDefault();

    // validad la entrada
    if (cantidad < 1 || isNaN(cantidad)) {
      // no hay ingreso o el ingreso es 0 o el valor es negativo
      guardarError(true);
      return;
    }

    // despues de la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>coloca tu presupuesto</h2>

      {error ? <Error msm="el presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired
}


export default Pregunta;

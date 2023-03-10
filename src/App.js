import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Pregunta from "./components/Pregunta";
import Listado from "./components/Listado";
import "./index.css";
import ControlPresupuesto from './components/ControlPresupuesto'



function App() {
  // definir el estado
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] =useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)
  
  
  
  
  
  // actualizar el restante con useEffect
  useEffect(()=>{
    if(crearGasto){
      guardarGastos([
        ...gastos, gasto
      ]);
      
      //retsar el presupuesto para crear el resto
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // recetear crearGastos
      guardarCrearGasto(false);

    }
  },[gasto, crearGasto, gastos, restante])
  

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                gastos={gastos}
                />

                <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
                
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import calculadoraLogo from './imagenes/logo-calculadora.png';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  };

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input));

    }else{
      alert("Por favor ingresa valores para realizar los calculos")
    }
  }

  return (
    <div className='App'>
      <div className= 'logo-contenedor'>
        <img src={calculadoraLogo}
        className='calculadora-logo'
        alt='logo de calculador'
        />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'> 
        <Boton manejarclic={agregarInput}>1</Boton> 
        <Boton manejarclic={agregarInput}>2</Boton>
        <Boton manejarclic={agregarInput}>3</Boton> 
        <Boton manejarclic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarclic={agregarInput}>4</Boton> 
        <Boton manejarclic={agregarInput}>5</Boton>
        <Boton manejarclic={agregarInput}>6</Boton> 
        <Boton manejarclic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarclic={agregarInput}>7</Boton> 
        <Boton manejarclic={agregarInput}>8</Boton>
        <Boton manejarclic={agregarInput}>9</Boton> 
        <Boton manejarclic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarclic={agregarInput}>0</Boton>
        <Boton manejarclic={agregarInput}>.</Boton> 
        <Boton manejarclic={calcularResultado}>=</Boton> 
        <Boton manejarclic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear= {()=> setInput('')}>
            Clear</BotonClear>
           
        </div>
        
      </div>
    </div>
    
  );
}

export default App;

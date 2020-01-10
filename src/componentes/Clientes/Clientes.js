import React from 'react'
import ClientesImg from './imgs/clientes.png'

function Clientes() {
  return (
    <div class='container-fluid recuadro-clientes'>
      <a class='ancla' id='recuadro-clientes'/>
      <div class='row justify-content-center pt-4'>
        <div class='col-10'>
          <h2 class='marco-logo mx-auto text-center'>CLIENTES</h2>
        </div>
      </div>
      <div class='row justify-content-center'>
        <div class='col-10 text-center'>
          <img src={ClientesImg} class='img-fluid' alt='Clientes'/>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
import React from 'react'
import ClientesImglg from './imgs/clientes.png';
import ClientesImgsm from './imgs/clientes-sm.png';
import ClientesImgxs from './imgs/clientes-movil.png';

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
        <div class='d-none d-lg-block col-8 text-center pb-5'>
          <img src={ClientesImglg} class='img-fluid' alt='Clientes'/>
        </div>
        <div class='d-none d-sm-block d-lg-none col-8 text-center pb-5'>
          <img src={ClientesImgsm} class='img-fluid' alt='Clientes'/>
        </div>
        <div class='d-block d-sm-none col-8 text-center'>
          <img src={ClientesImgxs} class='img-fluid' alt='Clientes'/>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
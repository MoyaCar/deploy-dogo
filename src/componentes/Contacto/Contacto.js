import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contacto(){
  return (
    <div class='container-fluid recuadro-contacto py-4'>
      <a class='ancla'id='recuadro-contacto'/>
      <div class='row justify-content-center'>
        <div class='col-10'>
          <h2 class='text-center marco-logo mx-auto text-white my-4'>CONTACTO</h2>
        </div>
      </div>
      
      <form noValidate autoComplete="off">
        <div class= 'row  pt-3 justify-content-center'>
          <div class='col-12 form-group'>
            <input class="form-control recuadro-input mx-auto mb-2" type="text" placeholder="Nombre"/>
          </div>
          <div class='col-12 form-group'>
            <input class="form-control recuadro-input mx-auto mb-2" type="text" placeholder="Consulta"/>
          </div>
          <div class='col-12 form-group'>
            <input class="form-control recuadro-input mx-auto mb-2" type="text" placeholder="Link a Portfolio o CV"/>
          </div>
          <div class='col-12 form-group'>
            <textarea class="form-control recuadro-input mx-auto mb-2" type="text" placeholder="Mensaje" rows='4'/>
          </div>
          <div class='col-12'>
            <div class='recuadro-input mx-auto text-right'>
              <button type="submit" class="btn boton px-4 mb-2">Enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contacto;
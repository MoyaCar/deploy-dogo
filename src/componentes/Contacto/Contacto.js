import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contacto(){
  return (
    <div class='container-fluid recuadro-contacto py-4'>
      <div class='row justify-content-center'>
        <div class='col-10'>
          <h2 class='text-center marco-logo mx-auto text-white my-4'>CONTACTO</h2>
        </div>
      </div>
      
      <form noValidate autoComplete="off">
        <div class='row justify-content-center'>
          <div class='col-12'>
            <div class='recuadro-input mx-auto mb-4'>
              <TextField id="outlined-basic" label="Nombre" variant="outlined" fullWidth/>
            </div>
          </div>
          <div class='col-12'>
            <div class='recuadro-input mx-auto mb-4'>
              <TextField id="outlined-basic" label="Consulta" variant="outlined" fullWidth />
            </div>
          </div>
          <div class='col-12'>  
            <div class='recuadro-input mx-auto mb-4'>
              <TextField id="outlined-basic" label="Mensaje" variant="outlined" fullWidth />
            </div>
          </div>  
          <div class='col-12'>
            <div class='recuadro-input mx-auto mb-4'>
              <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                <label class="custom-file-label" for="inputGroupFile01">Adjuntar CV</label>
              </div>
            </div>
          </div>
          <div class='col-12'>
            <div class='recuadro-input mx-auto text-right mb-4'>
              <Button variant="contained" color="primary" disableElevation>
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contacto;
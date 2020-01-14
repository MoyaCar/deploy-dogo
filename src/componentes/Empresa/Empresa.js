import React from 'react';
import Foto1 from './imgs/foto1.jpg';
import Foto3 from './imgs/foto3.jpg';
import Foto4 from './imgs/foto4.jpg';
import Foto5 from './imgs/foto5.jpg';
import Foto6 from './imgs/foto6.jpg';

function Empresa() {
  return (
    <div class='container-fluid recuadro-empresa pt-5' id='recuadro-empresa'>
      <div class='row py-5 justify-content-center'>
        <div class='col-12 col-md-10 col-lg-6 col-xl-5'>
          <div id="fotos" class="carousel carousel-empresa slide mx-auto ml-lg-auto mr-lg-0 shadow-lg animated fadeInLeft" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Foto1} class='foto img-fluid' data-filter='lark' alt="Foto1"></img>
              </div>
              <div class="carousel-item">
                <img src={Foto3} class='foto img-fluid' data-filter='lark' alt="foto3"/>
              </div>
              <div class="carousel-item">
                <img src={Foto4} class='foto img-fluid' data-filter='lark' alt="foto4"/>
              </div>
              <div class="carousel-item">
                <img src={Foto5} class='foto img-fluid' data-filter='lark' alt="foto5"/>
              </div>
              <div class="carousel-item">
                <img src={Foto6} class='foto img-fluid' data-filter='lark' alt="foto6"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#fotos" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#fotos" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
            <div class='animated fadeIn slower'>
              <div class='d-none d-lg-block transparencia'>
              </div>
            </div>
          </div>       
        </div>

        <div class='d-none d-xl-block separador'></div>

        <div class='col-12 col-md-10 col-lg-6 col-xl-5 text-center mt-5 mt-lg-0 bloque-derecho animated fadeInRight' >
          <div class='marco-logo mx-auto mr-lg-auto ml-lg-0 text-white '>
            <h1>F&GM S.R.L.</h1>
          </div>
          <div class='texto text-justify mx-auto mr-lg-auto ml-lg-0 pt-4 text-white'>
            Un estudio de arquitectura especializado en proyecto dirección y ejecución de obras civiles. Con el propósito de brindar soluciones para la arquitectura corporativa, logrando resultados eficaces; flexibles y creativos asegurando la mayor economía de recursos.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empresa;

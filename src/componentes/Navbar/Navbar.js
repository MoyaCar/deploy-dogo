import React from 'react';
import Logo from './imgs/logo.png'

function Navbar() {
 return ( 
  <div class='container-fluid'>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light navbe text-white">
      <a href='#recuadro-empresa'>
        <img src={Logo} class="navbar-brand img-fluid logo" href="#recuadro-empresa" alt='Logo'/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#recuadro-empresa">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#recuadro-servicios">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#recuadro-politica">Politica de Calidad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#recuadro-clientes">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#recuadro-contacto">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#recuadro-contacto">Trabaje con Nosotros</a>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
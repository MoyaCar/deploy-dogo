import React from 'react';
import Logo from './imgs/logo.png'

function Navbar() {
 return ( 
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light navbe text-white">
      <img src={Logo} class="navbar-brand img-fluid logo" href="#"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Politica de Calidad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trabaje con Nosotros</a>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
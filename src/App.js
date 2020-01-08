import React from 'react';

import Navbar from './componentes/Navbar/Navbar';
import Empresa from './componentes/Empresa/Empresa';
import Servicios from './componentes/Servicios/Servicios';
import Politica from './componentes/Politica/Politica';
import Clientes from './componentes/Clientes/Clientes';
import Contacto from './componentes/Contacto/Contacto';

function App() {
  return (
    <div>
      <Navbar />
      <Empresa />
      <Servicios />
      <Politica />
      <Clientes />
      <Contacto />
    </div>
  );
}

export default App;
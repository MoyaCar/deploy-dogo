import React from 'react'
import Foto2 from './imgs/foto2.jpg'

function Politica() {
  return(
    <div class='container-fluid recuadro-politica'>
      <div class='row justify-content-center py-5'>
        <div class='col-12 col-md-10 col-lg-6 col-xl-5 text-center bloque-derecho'>
          <div class='marco-logo mx-auto ml-lg-auto mr-lg-0'>
            <h2>POLITICA DE CALIDAD</h2>
            <div class='d-none d-xl-block transparencia'>
          </div>
          </div>
          <div class='texto text-justify mx-auto ml-lg-auto mr-lg-0 pt-4'>
            FG&M S.R.L. se compromete a revisar y mantener un sistema de gestión de calidad certificado según las Normas ISO 9001.<p/>
            Es prioridad de FG&M S.R.L. dar cumplimiento a los requisitos de los clientes, requisitos legales y normativa vigente, capacitando periódicamente a su personal.<p/>
            FG&M S.R.L. y todo su personal se ocupan diariamente de reconocer portunidades de mejora al sistema, los productos y el servicio. Además la organización acepta de buen agrado toda sugerencia de clientes,proveedores y empleados para el beneficio de todos. <p/>
            Quienes conforman FG&M S.R.L. asumen este compromiso con la calidad, la satisfacción del cliente y la mejora continua.
          </div>
        </div>

        <div class='d-none d-xl-block separador'>
        </div>

        <div class='d-none d-lg-block col-lg-6 col-xl-5'>
          <img src={Foto2} class='foto mx-auto mr-lg-auto ml-lg-0' alt="Foto2"/>
        </div>
      </div>
    </div>
  );
}

export default Politica;
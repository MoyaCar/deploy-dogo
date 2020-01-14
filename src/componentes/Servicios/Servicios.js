import React from 'react';
import Icono1 from './imgs/incon-01.png'
import Icono2 from './imgs/incon-02.png'
import Icono3 from './imgs/incon-03.png'

let tittle1 = 'Diseño de Espacios, Arquitectura e Instalaciones'
let textos1 = 'Traducimos las necesidades y los usos de la empresa, junto con la información técnica, en espacios que reflejan su impronta. Reinterpretamos la imagen empresarial para incorporarla en los ambientes de trabajo, apuntando a mejorar el confort, la sustentabilidad y la eficiencia en el uso de las superficies.';

let tittle2 = 'Dirección y Gerenciamiento de Obra'
let textos2 = 'Controlamos y corregimos los procesos de obra velando por los intereses de la empresa. Garantizamos el fiel cumplimiento del proyecto. Generamos una evaluación de los costos y de los plazo de la obras junto con una estimación de inversión, para darle al cliente un visión más clara de los proceso.';

let tittle3 = 'Construcción Llave en Mano'
let textos3 = 'Ofrecemos un proceso global de ejecución de obra. Se integra dentro de el contrato el total de la obra a realizar, garantizando la calidad y los plazos.';

class Servicios extends React.Component {
 
  constructor(){
    super();
    this.state = {
      open: '',
      class: '',
      texto: '',
      title: '',
      escondido: 'escondido'
    };
    this.changeClass1 = this.changeClass1.bind(this);
    this.changeClass2 = this.changeClass2.bind(this);
    this.changeClass3 = this.changeClass3.bind(this);
    this.close = this.close.bind(this);
  }
    changeClass1(){
      this.setState(prevState=>{
        if (prevState.class != 'texto1 animated fadeInDown faster' && !prevState.open ){
          return {title:tittle1, texto: textos1, class: 'texto1 animated fadeInDown faster', open: true}
        }if (prevState.class == 'texto1 animated fadeInDown faster' && prevState.open){
          return {escondido:'esconder', open: false}
        }if (prevState.class != 'texto1 animated fadeInDown faster' && prevState.open){
          return {title:tittle1, texto: textos1, class: 'texto1 animated fadeInDown faster', open: true}
        }if (prevState.class == 'texto1 animated fadeInDown faster' && !prevState.open ){
          return {open:true}
        }
      });
    }

    changeClass2(){
      this.setState(prevState=>{
        if (prevState.class != 'texto2 animated fadeIn' && !prevState.open ){
          return {title:tittle2, texto: textos2, class: 'texto2 animated fadeIn', open: true}
        }if (prevState.class == 'texto2 animated fadeIn' && prevState.open){
          return {escondido:'esconder', open: false}
        }if (prevState.class != 'texto2 animated fadeIn' && prevState.open){
          return {title:tittle2, texto: textos2, class: 'texto2 animated fadeIn', open: true}
        }if (prevState.class == 'texto2 animated fadeIn' && !prevState.open ){
          return {open:true}
        }
      });
    }

    changeClass3(){
      this.setState(prevState=>{
        if (prevState.class != 'texto3 animated fadeInUp faster' && !prevState.open ){
          return {title:tittle3, texto: textos3, class: 'texto3 animated fadeInUp faster', open: true}
        }if (prevState.class == 'texto3 animated fadeInUp faster' && prevState.open){
          return {escondido:'esconder', open: false}
        }if (prevState.class != 'texto3 animated fadeInUp faster' && prevState.open){
          return {title:tittle3, texto: textos3, class: 'texto3 animated fadeInUp faster', open: true}
        }if (prevState.class == 'texto3 animated fadeInUp faster' && !prevState.open ){
          return {open:true}
        }
      });
    }

    close(){
      this.setState({escondido:'esconder', open: false});
    }

    render(){
      return(
        <div class='container-fluid recuadro-servicios text-white'>
          <a class='ancla' id='recuadro-servicios'/>
          <div class='row justify-content-center pt-5'>
            <div class='text-center '>
              <div class='marco-logo mx-auto'>
                <h2>SERVICIOS</h2>
              </div>
            </div>
          </div>
          <div class='row pt-5 justify-content-center'>
            <div class='col-3 text-center'>
              <img src={Icono3} class='icono-info img-fluid mx-auto' onClick={this.changeClass1} alt='icono engranaje'/>
            </div>
            <div class='col-3 text-center'>
              <img src={Icono2} class='icono-info img-fluid mx-auto' onClick={this.changeClass2} alt='icono disenio'/>
            </div>
            <div class='col-3 text-center'>
              <img src={Icono1} class='icono-info img-fluid mx-auto' onClick={this.changeClass3} alt='icono llave'/>
            </div>

          </div>
          <div class='row justify-content-center pt-5'>
            <div class={this.state.open?'caja-texto text-center mx-auto' :this.state.escondido}>
              <div class={this.state.open?'texto-servicios mx-auto px-4 py-4': 'esconder-texto'}>
                <p class={'font-weight-bold ' + this.state.class}>{this.state.title}</p>
                <p class={'text-justify '+ this.state.class}>{this.state.texto}</p>
              </div>
            </div>
            <div class={this.state.open?'boton-cerrar animated fadeIn slow': 'boton-off'} onClick={this.close} href="#recuadro-servicios">
              <a href="#recuadro-servicios">
              <i class='material-icons flecha'>
                keyboard_arrow_up
              </i>
              </a>
            </div>
          </div>
        </div>
      ); 
    } 
  }

export default Servicios;
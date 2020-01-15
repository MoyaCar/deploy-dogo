import React from 'react';


class Contacto extends React.Component{
  constructor(){
    super()

    this.state = {
      nombre: '',
      consulta: '',
      link: '',
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const templateId = 'template_hlQWe29L';
  
    this.sendFeedback(templateId, {message_html: this.state.text , from_name: this.state.nombre})
    }
  
    sendFeedback (templateId, variables) {
      
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
        alert("Mensaje enviado")
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  
  render() {
    return (
      <div class='container-fluid recuadro-contacto py-4'>
        <a class='ancla'id='recuadro-contacto'/>
        <div class='row justify-content-center'>
          <div class='col-10'>
            <h2 class='text-center marco-logo mx-auto text-white my-4'>CONTACTO</h2>
          </div>
        </div>
        
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <div class= 'row  pt-3 justify-content-center'>
            <div class='col-12 form-group'>
              <input class="form-control recuadro-input mx-auto mb-2" type="text" name='nombre' onChange={this.handleChange} placeholder="Nombre"/>
            </div>
            <div class='col-12 form-group'>
              <input class="form-control recuadro-input mx-auto mb-2" type="text" name='consulta' onChange={this.handleChange} placeholder="Consulta"/>
            </div>
            <div class='col-12 form-group'>
              <input class="form-control recuadro-input mx-auto mb-2" type="text" name='link' onChange={this.handleChange} placeholder="Link a Portfolio o CV"/>
            </div>
            <div class='col-12 form-group'>
              <textarea class="form-control recuadro-input mx-auto mb-2" type="text" name='text' onChange={this.handleChange} placeholder="Mensaje" rows='4'/>
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
}

export default Contacto;
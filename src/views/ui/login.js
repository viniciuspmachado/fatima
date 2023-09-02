import React from 'react';
/* import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit'; */
import '../../../src/assets/scss/login.css';
import { Row, Col, Card, Label, Form, FormGroup, Input, Button } from "reactstrap";

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        user: '',
        pass: '',
    }
  };
  
  onUserChange = (event) => {
    this.setState({user: event.target.value})
  };

  onPassChange = (event) => {
    this.setState({pass: event.target.value})
  };

  onSubmitSignIn = async () => {
  
    let error = 0;
  
    if(this.state.user.trim() === ''){
      alert("Por favor, digite o nome de usuário!");
      error = 1;
    } 
    
    if(this.state.pass.trim() === ''){
      alert("Por favor, digite a senha");
      error = 1;
    } 
  
    if (error === 0){
      
      await fetch(process.env.REACT_APP_SERVER_TZ+'/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              user: this.state.user,
              pass: this.state.pass,
          })
      })
          //.then(alert("Bem vindo!"))
          .then(response => response.json())
          .then (usuario => {
            //alert(usuario.login);
            if (usuario.login){
              alert('Bem vindo '+usuario.login);
            } else 
            alert(usuario);
            //window.location.replace(process.env.REACT_APP_SERVER_APP);
            //window.location.reload();
          })
          
    }
  }
  
  render() {

  return (
      <div className="App">
          <h2>Iniciar Sessão</h2>
          <Form className="form">
            <FormGroup>
              <Label for="exampleEmail">Usuário</Label>
              <Input
                type="user"
                name="user"
                id="user"
                placeholder="usuário"
                onChange={this.onUserChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Senha</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange={this.onPassChange}
              />
            </FormGroup>
            <input
          
            onClick={this.onSubmitSignIn}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Entrar"
          
          />
        </Form>
      </div>
    );
  }
}

export default Login;
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
import { Label, Button, Modal, Form, FormGroup, Input, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link} from "react-router-dom";

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        user: '',
        pass: '',
        rota: '',
        message: '',
        t_message: '',
        modal: false
    }

    this.toggle = this.toggle.bind(this);
  };

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onUserChange = (event) => {
    this.setState({user: event.target.value})
  };

  onPassChange = (event) => {
    this.setState({pass: event.target.value})
  };

  paginaPrincipal = () => {
    //alert(process.env.REACT_APP_SERVER_APP+this.state.rota);
    window.location.replace (process.env.REACT_APP_SERVER_APP+this.state.rota);
    //window.location.reload();
    //window.open(this.state.rota,"_self");
  }

  onMudaMessagem (mess) {
    this.setState((state) => {
      // Importante: use `state` em vez de `this.state` quando estiver atualizando.
      return {message: mess}
    });
  };

  onMudaTitulo (mess) {
    this.setState((state) => {
      // Importante: use `state` em vez de `this.state` quando estiver atualizando.
      return {t_message: mess}
    });
  };

  onMudaLink (mess) {
    this.setState((state) => {
      // Importante: use `state` em vez de `this.state` quando estiver atualizando.
      return {rota: mess}
    });
  };

  onSubmitSignIn = async () => {
    //alert(process.env.REACT_APP_SERVER_TZ+'/signin');
    let error = 0;
  
    if(this.state.user.trim() === ''){
      //alert("Por favor, digite o nome de usuário!");
      this.onMudaTitulo("Erro!");
      this.onMudaMessagem("Por favor, digite o nome de usuário!");
      this.onMudaLink('/#/login');
      error = 1;
      this.toggle();
    } 
    
    if(this.state.pass.trim() === ''){
      //alert("Por favor, digite a senha");
      this.onMudaTitulo("Erro!");
      this.onMudaMessagem("Por favor, digite a senha!");
      this.onMudaLink('/#/login');
      error = 1;
      this.toggle();
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
              sessionStorage.setItem('nomez',usuario.nome.split(' ')[0])
              sessionStorage.setItem('permz',usuario.perm)
              this.onMudaTitulo("Sucesso!");
              this.onMudaMessagem('Bem vindo '+sessionStorage.getItem('nomez'));
              this.onMudaLink('/#/');
              this.toggle();
              //alert('Bem vindo '+sessionStorage.getItem('nomez'));
              //await(2000); 
              //window.open("/","_self")
            } else {
              //alert(usuario);
              this.onMudaTitulo("Erro!");
              this.onMudaMessagem(usuario);
              this.onMudaLink('/#/login');
              this.toggle();
              //window.open("/login","_self")
              
              //alert('Não Entrou e vai para: '+this.state.rota);
            }
          })
          
    }
  }
  
  render() {
    
  return (
      <div className="App">
          
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop="static">
              <ModalHeader toggle={this.toggle}>{this.state.t_message}</ModalHeader>
              <ModalBody>
                {this.state.message}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.paginaPrincipal}>OK</Button>{' '}
              </ModalFooter>
            </Modal>
          </div>

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
            
          <Link to={this.state.rota} className="btn btn-primary" onClick={this.onSubmitSignIn} >Entrar</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='/caduser' className="btn btn-primary">Solicitar Cadastro</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to={this.state.rota}>Solicitar Nova Senha</Link>
        </Form>
      </div>
    );
  }
}

export default Login;
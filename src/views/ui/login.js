import React, {useContext} from 'react';
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
import { Link} from "react-router-dom";
import Global from '../../contexts/Global';

//const [nome, setNome] = useContext(Global);

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        user: '',
        pass: '',
        rota: '/login'
    }
  };
  
  

  mudarota = () => {
    this.props.updateItem(this.state)
    alert('antrou')
  }

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
              sessionStorage.setItem('nomez',usuario.nome.split(' ')[0])
              sessionStorage.setItem('permz',usuario.perm)
              alert('Bem vindo '+sessionStorage.getItem('nomez'));
              window.open("/","_self")
            } else {
              alert(usuario);
              //window.open("/login","_self")
              
              //alert('Não Entrou e vai para: '+this.state.rota);
            }
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
            
          <Link to={this.state.rota} className="btn btn-primary" onClick={this.onSubmitSignIn}>Entrar</Link>
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
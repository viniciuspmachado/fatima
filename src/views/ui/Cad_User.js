import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  //Button,
  Form,
  FormGroup,
  Label,
  Input,
  /*FormText,*/
} from "reactstrap";
import React from 'react';
import OptPastorais from "../../components/OptPastorais";
import {Link} from "react-router-dom";

//let error_end = '/';

class Cad_User extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        login: '',
        email: '',
        nome: '',
        senha: '',
        senhar: '',
        pastoral:'1',
        error_end:'/',
        
    }
};


onLoginChange = (event) => {
  this.setState({login: event.target.value})
};

onNomeEmailChange = (event) => {
  this.setState({email: event.target.value})
};


onNomeChange = (event) => {
  this.setState({nome: event.target.value})
};


onSenhaChange = (event) => {
  this.setState({senha: event.target.value})
};

onSenharChange = (event) => {
  this.setState({senhar: event.target.value})
};

onPastoralChange = (event) => {
  this.setState({pastoral: event.target.value})
};


//Rotina para verificar erros no formulário
onSubmitSignIn = async () => {
  
  //alert(this.state.email.trim())
  //alert(/\S+@\S+\.\S+/.test(this.state.email.trim()));

  let error = 0;

  if(this.state.login.trim() === ''){
    alert("Por favor, digite seu login de preferência.");
    error = 1;
  } 
  
  if(this.state.nome.trim() === ''){
    alert("Por favor, preencha pelo o nome do usuário.");
    error = 1;
  } 

  if(!(/\S+@\S+\.\S+/.test(this.state.email.trim()))){
    alert("Por favor, digite e-mail válido.");
    error = 1;
  } 
  
  if(this.state.senha.trim() === '' || this.state.senha.length < 6){
    alert("Por favor, digite sua senha com no mínimo 6 caracteres.");
    error = 1;
    this.setState({error_end: '/caduser'});
  } 

  if(this.state.senhar.trim() === ''){
    alert("Por favor, repita a senha.");
    error = 1;
  } 

  if(this.state.senha.trim() !== this.state.senhar.trim()){
    alert("As senhas não coincidem!");
    error = 1;
  } 

  //alert(error);

  if (error !== 1){
    
    await fetch(process.env.REACT_APP_SERVER_TZ+'/register_user', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            login: this.state.login,
            nome: this.state.nome,
            senha: this.state.senha,
            email: this.state.email,
            pastoral: this.state.pastoral,
            
        })
    })
    .then(response => response.json())
    .then (usuario => {
      alert(usuario);
      window.open("/","_self")
      
    })
  } else {
    //alert('Não cadastrou!');
    window.open("#/caduser","_self");
  }
}
//Fim === Rotina para verificar erros no formulário
  render() {
    
    
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <h3>
              <i className='bi bi-file-earmark-person'></i>
                {'  '}Cadastro de Usuários
              </h3>
            </CardTitle>
            <CardBody>
              <Form>
              
                
                <FormGroup className='w-50' name='f1'>
                  <Label for="login">Login:</Label>
                    <Input
                      width='w-25'
                      id="login"
                      name="login"
                      placeholder=""
                      type="text"
                      onChange={this.onLoginChange}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="nome">Nome Completo:</Label>
                    <Input
                      width='w-25'
                      id="nome"
                      name="nome"
                      placeholder=""
                      type="text"
                      onChange={this.onNomeChange}
                    />
                </FormGroup>

                <FormGroup className='w-50'>
                  <Label for="Email" >E-mail:</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder=""
                    type="text"
                    onChange={this.onNomeEmailChange}
                  />
                </FormGroup>

                
                

                <FormGroup className='w-50'>
                  <Label for="senha">Senha:</Label><small>&nbsp;(No mínimo 6 caracteres)</small>
                  <Input
                    id="senha"
                    name="senha"
                    placeholder=""
                    type="password"
                    onChange={this.onSenhaChange}
                  />
                </FormGroup>

                <FormGroup className='w-50'>
                  <Label for="senhar">Repita a Senha:</Label>
                  <Input
                    id="senhar"
                    name="senhar"
                    placeholder=""
                    type="password"
                    onChange={this.onSenharChange}
                  />
                </FormGroup>

                
                
                <FormGroup className='w-50'>
                <Label for="exampleSelectMulti">Qual pastoral está vinculado?</Label>
                  <Input id="dataSelect" name="pastoral" type="select" onChange={this.onPastoralChange}>
                    <OptPastorais/>
                  </Input>
                </FormGroup>

                

                <br/>
                {/* <input
                    onClick={this.onSubmitSignIn}
                    className="btn btn-primary"
                    type="submit"
                    value="Solicitar Cadastro"
                  /> */}
                <Link className="btn btn-primary" onClick={this.onSubmitSignIn}>Solicitar Cadastro</Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  };
};

export default Cad_User;

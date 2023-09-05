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
import OptParoquias from "../../components/m_batismo/OptParoquias";
import { Link} from "react-router-dom";

class Cad_User extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        tipoP: '',
        nomedele: '',
        nomedela: '',
        casados: '0',
        datap: '',
        endereco: '',
        cidade: '',
        telefone: '',
        sacramentos: '',
        paroquia: '1',
        ecc: '0',
        batismo: '0',
        euca: '0',
        crisma: '0',
        matrimonio: '0',
        ordem: '0',
    }
};



onLoginChange = (event) => {
  this.setState({nomedele: event.target.value})
};



onNomeEmailChange = (event) => {
  this.setState({nomedela: event.target.value})
};


onNomeChange = (event) => {
  this.setState({nomedele: event.target.value})
};


onSenhaChange = (event) => {
  this.setState({endereco: event.target.value})
};





onPastoralChange = (event) => {
  this.setState({paroquia: event.target.value})
};

onECCChange = (event) => {
    this.setState({ecc: event.target.value})
};

onSubmitSignIn = async () => {
  
  let error = 0;

  if(this.state.tipoP.trim() === ''){
    alert("Por favor, selecione o tipo de participação (pais ou padrinhos)!");
    error = 1;
  } 
  
  if(this.state.nomedele.trim() === '' && this.state.nomedela.trim() === ''){
    alert("Por favor, preencha pelo menos nome de um participante!");
    error = 1;
  } 
  
  if(this.state.datap.trim() === ''){
    alert("Por favor , informe a data para a preparação para o Batismo!");
    error = 1;
  } 

  if (error === 0){
    
    await fetch(process.env.REACT_APP_SERVER_TZ+'/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            tipo: this.state.tipoP,
            nomedele: this.state.nomedele,
            nomedela: this.state.nomedela,
            casados: this.state.casados,
            datap: this.state.datap,
            endereco: this.state.endereco,
            cidade: this.state.cidade,
            telefone: this.state.telefone,
            sacramentos: this.state.sacramentos,
            paroquia: this.state.paroquia,
            ecc: this.state.ecc,
            batismo: this.state.batismo,
            euca: this.state.euca,
            crisma: this.state.crisma,
            matrimonio: this.state.matrimonio,
            ordem: this.state.ordem
        })
    })
        .then(alert("Agendamento realizado com Sucesso!"))
        .then(response => {response.json()
          //console.log(response.users[0])
          window.location.replace('/');
        })
        .then(users => {
            if (users) {
              console.log('2==>',users);
               //this.props.loadUser(user);
               //this.props.onRouteChange('/'); 
            }
        })
  }
}

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
              
                
                <FormGroup className='w-50'>
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
                  <Label for="senha">Senha:</Label>
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
                    onChange={this.onSenhaChange}
                  />
                </FormGroup>

                
                
                <FormGroup className='w-50'>
                <Label for="exampleSelectMulti">Qual pastoral está vinculado?</Label>
                  <Input id="dataSelect" name="paroquia" type="select" onChange={this.onPastoralChange}>
                    <OptParoquias/>
                  </Input>
                </FormGroup>
                    

                

                <br/>

                <Link to='/' className="btn btn-primary" onClick={this.onSubmitSignIn}>Solicitar Cadastro</Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  };
};

export default Cad_User;

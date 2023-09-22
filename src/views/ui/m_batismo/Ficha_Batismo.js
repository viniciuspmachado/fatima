import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  /*FormText,*/
  Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";
import React from 'react';
import OptParoquias from "../../../components/m_batismo/OptParoquias";
import OptDatasBat from "../../../components/m_batismo/OptDatasBat";
import {Link} from "react-router-dom";

class Ficha_Batismo extends React.Component {
  
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
        rota: '0',
        message: '',
        t_message: '',
        modal: false,
    }
    this.toggle = this.toggle.bind(this);
};

toggle() {
  this.setState({
    modal: !this.state.modal
  });
}

onTipoPChange = (event) => {
    this.setState({tipoP: event.target.value})
};

onNomeDeleChange = (event) => {
  this.setState({nomedele: event.target.value})
};

onNomeDelaChange = (event) => {
  this.setState({nomedela: event.target.value})
};

onCasadosChange = (event) => {
  this.setState({casados: event.target.value})
};

onDataPChange = (event) => {
  this.setState({datap: event.target.value})
};

onEnderecoChange = (event) => {
  this.setState({endereco: event.target.value})
};

onCidadeChange = (event) => {
  this.setState({cidade: event.target.value})
};

onTelChange = (event) => {
  this.setState({telefone: event.target.value})
};

onSacraChange = (event) => {
  this.setState({sacramentos: event.target.value})
};

onBatisChange = (event) => {
  this.setState({batismo: event.target.value})
};

onEucaChange = (event) => {
  this.setState({euca: event.target.value})
};

onCrismaChange = (event) => {
  this.setState({crisma: event.target.value})
};

onMatriChange = (event) => {
  this.setState({matrimonio: event.target.value})
};

onOrdemChange = (event) => {
  this.setState({ordem: event.target.value})
};

onParoquiaChange = (event) => {
  this.setState({paroquia: event.target.value})
};

onECCChange = (event) => {
    this.setState({ecc: event.target.value})
};

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

paginaPrincipal = () => {
  //alert(this.state.rota);
  this.toggle();
  if  (this.state.rota != 0){
  window.location.replace (process.env.REACT_APP_SERVER_APP+'/#/');
  window.location.reload();
    
  }
  //window.open(this.state.rota,"_self");
}

onSubmitSignIn = async () => {
  
  let error = 0;

  if(this.state.tipoP.trim() === ''){
    //alert("Por favor, selecione o tipo de participação (pais ou padrinhos)!");
    error = 1;
    this.onMudaTitulo("Erro!");
    this.onMudaMessagem('Por favor, selecione o tipo de participação (pais ou padrinhos)!');
    this.toggle();
  } 
  
  if(this.state.nomedele.trim() === '' && this.state.nomedela.trim() === ''){
    //alert("Por favor, preencha pelo menos nome de um participante!");
    error = 1;
    this.onMudaTitulo("Erro!");
    this.onMudaMessagem('Por favor, preencha pelo menos nome de um participante!');
    this.toggle();
  } 
  
  if(this.state.datap.trim() === ''){
    //alert("Por favor , informe a data para a preparação para o Batismo!");
    error = 1;
    this.onMudaTitulo("Erro!");
    this.onMudaMessagem('Por favor , informe a data para a preparação para o Batismo!');
    this.toggle();
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
        //.then(alert("Agendamento realizado com Sucesso!"))
        .then(response => {response.json()
          //console.log(response.users[0])
          this.onMudaLink(1);
          this.onMudaTitulo("Sucesso!");
          this.onMudaMessagem('Agendamento realizado!');
          this.toggle();
          //window.location.replace('/');
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
      <>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop="static">
            <ModalHeader toggle={this.toggle}>{this.state.t_message}</ModalHeader>
            <ModalBody>
              {this.state.message}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.paginaPrincipal}>OK</Button>{' '}
            </ModalFooter>
          </Modal>

          <Row>
            <Col>
              {/* --------------------------------------------------------------------------------*/}
              {/* Card-1*/}
              {/* --------------------------------------------------------------------------------*/}
              <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                  <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 640 512"><path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V48H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z"/></svg>
                    {'  '}Ficha para Preparação ao Sacramento do Batismo
                  </h3>
                </CardTitle>
                <CardBody>
                  <Form>
                  <FormGroup tag="fieldset">
                  <Label >Tipo de Participação:</Label>
                      <FormGroup check>
                        <Input name="pp" type="radio" value="1" onChange={this.onTipoPChange}/>{" "}
                        <Label check>
                          Pai(s)
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input name="pp" type="radio" value="0" onChange={this.onTipoPChange}/>{" "}
                        <Label check>
                          Padrinho(s)
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    
                    <FormGroup>
                      <Label for="nomeDele">Nome Dele:</Label>
                      <Input
                        id="nomeDele"
                        name="nomeDele"
                        placeholder=""
                        type="text"
                        onChange={this.onNomeDeleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleEmail">Nome Dela:</Label>
                      <Input
                        id="nomeDela"
                        name="nomeDela"
                        placeholder=""
                        type="text"
                        onChange={this.onNomeDelaChange}
                      />
                    </FormGroup>

                    <Label >São Casados?</Label>
                    <FormGroup>
                      <FormGroup check>
                        <Input name="casados" type="radio" value='1' onChange={this.onCasadosChange}/>{" "}
                        <Label check>
                          Sim
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input name="casados" type="radio" value='0' onChange={this.onCasadosChange} checked/>{" "}
                        <Label check>
                          Não
                        </Label>
                      </FormGroup>
                    </FormGroup>

                    <FormGroup>
                      <Label><b>
                        * Local: Salão Paroquial <br/>
                        * Presencial <br/>
                        * Horário: 19:00 <br/><br/>
                        </b>
                        Marque a data para realizar a preparação do Batismo de acordo com o disponível no calendário.
                      </Label>
                      <Input id="dataSelect" name="datapart" type="select" onChange={this.onDataPChange}>
                      <option value='-'>-</option>
                        <OptDatasBat/>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="enderco">Endereço:</Label>
                      <Input
                        id="endereco"
                        name="endereco"
                        placeholder=""
                        type="text"
                        onChange={this.onEnderecoChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="cidade">Cidade:</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        placeholder=""
                        type="text"
                        onChange={this.onCidadeChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="telefone">Telefone:</Label>
                      <Input
                        id="tel"
                        name="tel"
                        placeholder=""
                        type="text"
                        onChange={this.onTelChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleSelectMulti">Recebeu quais sacramentos?</Label>
                      <br/>
                      <input type="checkbox" name="batismo" value = "1" onChange={this.onBatisChange} />&nbsp;Batismo &nbsp;&nbsp;&nbsp;
                      <input type="checkbox" name="euca" value = "2" onChange={this.onEucaChange} />&nbsp;1a. Eucaristia &nbsp;&nbsp;&nbsp;
                      <input type="checkbox" name="crisma" value = "3" onChange={this.onCrismaChange}/>&nbsp;Crisma &nbsp;&nbsp;&nbsp;
                      <input type="checkbox" name="matrimonio" value = "5" onChange={this.onMatriChange}/>&nbsp;Matrimônio &nbsp;&nbsp;&nbsp;
                      <input type="checkbox" name="ordem" value = "4" onChange={this.onOrdemChange}/>&nbsp;Ordem

                      {/* <Input
                        id="sacramentos"
                        multiple
                        name="sacramentos"
                        type="select"
                        onChange={this.onSacraChange}
                      >
                        <option>Batismo</option>
                        <option>1a. Eucaristia</option>
                        <option>Crisma</option>
                        <option>Matrimônio</option>
                        <option>Ordem</option>
                      </Input>*/}
                    </FormGroup>
                    
                    <FormGroup>
                    <Label for="exampleSelectMulti">Qual a paróquia que frequenta?</Label>
                      <Input id="dataSelect" name="paroquia" type="select" onChange={this.onParoquiaChange}>
                        <OptParoquias/>
                      </Input>
                    </FormGroup>
                        

                    <Label >Já participou do Encontro de Casais com Cristo (ECC)?</Label>
                    <FormGroup>
                      <FormGroup check>
                        <Input name="radio3" value="1" type="radio" onChange={this.onECCChange}/>{" "}
                        <Label check>
                          Sim
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input name="radio3" value="0" type="radio" onChange={this.onECCChange} checked/>{" "}
                        <Label check>
                          Não
                        </Label>
                      </FormGroup>
                    </FormGroup>

                    <Label >Vídeo de Acolhida:</Label><br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vrFbVSvKl1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <br/>

                    {/* <input
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Enviar"
                      /> */}

                  <Link className="btn btn-primary" onClick={this.onSubmitSignIn}>Enviar</Link>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </>
    )
  };
};

export default Ficha_Batismo;

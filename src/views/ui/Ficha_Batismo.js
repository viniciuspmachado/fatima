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
} from "reactstrap";
import React from 'react';

class Ficha_Batismo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tipoP: '0',
        nomedele: '',
        nomedela: '',
        casados: '0',
        datap: '',
        endereco: '',
        cidade: '',
        telefone: '',
        sacramentos: '',
        paroquia: '',
        ecc: '',
        batismo: '0'
    }
};

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

onParoquiaChange = (event) => {
  this.setState({paroquia: event.target.value})
};

onECCChange = (event) => {
    this.setState({ecc: event.target.value})
};

onSubmitSignIn = () => {
    fetch('http://localhost:3001/register', {
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
            batismo: this.state.batismo
        })
    })
        .then(response => response.json())
        .then(user => {
            if (user) {
               alert(user);
               this.props.loadUser(user);
               this.props.onRouteChange('home'); 
            }
        })
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
                    <Input name="casados" type="radio" value='0' onChange={this.onCasadosChange}/>{" "}
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
                    <option>16/03/2023</option>
                    <option>17/03/2023</option>
                    <option>18/03/2023</option>
                    <option>19/03/2023</option>
                    <option>20/03/2023</option>
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
                  <input type="checkbox" name="1euca" value = "2" />&nbsp;1a. Eucaristia &nbsp;&nbsp;&nbsp;
                  <input type="checkbox" name="crisma" value = "3" />&nbsp;Crisma &nbsp;&nbsp;&nbsp;
                  <input type="checkbox" name="matrimonio" value = "4" />&nbsp;Matrimônio &nbsp;&nbsp;&nbsp;
                  <input type="checkbox" name="ordem" value = "5" />&nbsp;Ordem

                  <Input
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
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="paroquia">Paróquia que Frequenta:</Label>
                  <Input
                    id="paroquia"
                    name="paroquia"
                    placeholder=""
                    type="email"
                    onChange={this.onParoquiaChange}
                  />
                </FormGroup>

                <Label >Já participou do Encontro de Casais com Cristo (ECC)?</Label>
                <FormGroup>
                  <FormGroup check>
                    <Input name="radio3" type="radio" onChange={this.onECCChange}/>{" "}
                    <Label check>
                      Sim
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input name="radio3" type="radio" onChange={this.onECCChange}/>{" "}
                    <Label check>
                      Não
                    </Label>
                  </FormGroup>
                </FormGroup>

                <Label >Vídeo de Acolhida:</Label><br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vrFbVSvKl1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br/>

                <input
                    onClick={this.onSubmitSignIn}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Enviar"
                  />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  };
};

export default Ficha_Batismo;

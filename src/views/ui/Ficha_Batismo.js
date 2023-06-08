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

const Ficha_Batismo = () => {
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
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Pai(s)
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Padrinho(s)
                  </Label>
                </FormGroup>
              </FormGroup>
              
              <FormGroup>
                <Label for="exampleEmail">Nome Dele:</Label>
                <Input
                  id="nomeDele"
                  name="nomeDele"
                  placeholder=""
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Nome Dela:</Label>
                <Input
                  id="nomeDela"
                  name="nomeDela"
                  placeholder=""
                  type="email"
                />
              </FormGroup>

              <Label >São Casados?</Label>
              <FormGroup>
                <FormGroup check>
                  <Input name="radio2" type="radio" />{" "}
                  <Label check>
                    Sim
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio2" type="radio" />{" "}
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
                <Input id="exampleSelect" name="select" type="select">
                  <option>16/03/2023</option>
                  <option>16/03/2023</option>
                  <option>16/03/2023</option>
                  <option>16/03/2023</option>
                  <option>16/03/2023</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Endereço:</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  placeholder=""
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Cidade:</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  placeholder=""
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Telefone:</Label>
                <Input
                  id="tel"
                  name="tel"
                  placeholder=""
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelectMulti">Recebeu quais sacramentos?</Label>
                <Input
                  id="sacramentos"
                  multiple
                  name="sacramentos"
                  type="select"
                >
                  <option>Batismo</option>
                  <option>1a. Eucaristia</option>
                  <option>Crisma</option>
                  <option>Matrimônio</option>
                  <option>Ordem</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Paróquia que Frequenta:</Label>
                <Input
                  id="paroquia"
                  name="paroquia"
                  placeholder=""
                  type="email"
                />
              </FormGroup>

              <Label >Já participou do Encontro de Casais com Cristo (ECC)?</Label>
              <FormGroup>
                <FormGroup check>
                  <Input name="radio3" type="radio" />{" "}
                  <Label check>
                    Sim
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio3" type="radio" />{" "}
                  <Label check>
                    Não
                  </Label>
                </FormGroup>
              </FormGroup>

              <Label >Vídeo de Acolhida:</Label><br/>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/vrFbVSvKl1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <br/>

              <Button>Enviar</Button> 
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Ficha_Batismo;

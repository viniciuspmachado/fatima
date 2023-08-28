import LinhaTab from "../../../components/m_batismo/LinhaTab";
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Input, Button } from "reactstrap";
import OptDatasBat from "../../../components/m_batismo/OptDatasBat";
import React from 'react';

class Tables extends React.Component {
  
   constructor(props){
    super(props);
    this.state = {
        variavel: window.location.hash
    }
  }; 

  onSubmitSignIn = async () => {
    const queryString = this.state.variavel.substring(this.state.variavel.indexOf('?'));
    const urlParams = new URLSearchParams(queryString);
    let data = urlParams.get('data')
    if (data != null) {
      data = data.replaceAll("-","/");
    } else {
      data = '-';  
    }
    //alert('Gerando PDF');
    window.location.replace (process.env.REACT_APP_SERVER_APP+'/#/mostrapdf?data='+data);
    //window.open(process.env.REACT_APP_SERVER_APP+'/#/mostrapdf', '_blank').focus();
  }

  onDataPChange = (event) => {
    this.setState({datap: event.target.value});
    
    const dataselz = event.target.value.replaceAll("/","-");
    window.location.replace (process.env.REACT_APP_SERVER_APP+"/#/InscBatismo?data="+dataselz);
    window.location.reload();
  };
  
  
  
  render() {
    const queryString = this.state.variavel.substring(this.state.variavel.indexOf('?'));
    const urlParams = new URLSearchParams(queryString);
    let data = urlParams.get('data')
    if (data != null) {
      data = data.replaceAll("-","/");
    } else {
      data = '-';  
    }
    return (
      <Row>
        <Col lg="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <FormGroup>
                    <i className="bi bi-card-text me-2"> </i>
                    Lista de Participantes de Preparação do Batismo<br/><br/>
                    <Row>
                        <Col sm={3}>
                            <Input id="dataSelect" name="datapart" type="select" onChange={this.onDataPChange}>
                            <option value={data}>{data}</option>
                              <OptDatasBat />
                            </Input>
                        </Col>

                        <Col sm={3}>
                          <Button
                            color="primary"
                            onClick={this.onSubmitSignIn}
                            type="submit"
                            value="Enviar"
                          >Gerar PDF</Button>
                        </Col>
                        
                    </Row>
                  </FormGroup>
            </CardTitle>
            <CardBody className="">
                  
                  <LinhaTab datasel={data} />
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Tables;

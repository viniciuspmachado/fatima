import DatasBat from "../../../components/m_batismo/DatasBat";
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Input, Button } from "reactstrap";
import InputMask from 'react-input-mask';
import React from 'react';

class Tables extends React.Component {
  
   constructor(props){
    super(props);
    this.state = {
        variavel: window.location.hash,
        datap: ''
    }
  }; 

  onDataPChange = (event) => {
    this.setState({datap: event.target.value})
  };

  onSubmitSignIn = async () => {
    
    let data = this.state.datap.trim();
    if (data != null) {
      data = data.replaceAll("-","/");
      const link = process.env.REACT_APP_SERVER_TZ+'/register_dt';
      //alert(link);
      await fetch(link, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            datap: this.state.datap
        })
    }).then(alert("Data Cadastrada com Sucesso!"))
      .then(response => {response.json()
      //console.log(response.users[0])
      window.location.replace(process.env.REACT_APP_SERVER_APP+'/#/CadastroDatas');
      window.location.reload();
    })
    } else {
      data = '-';  
    }
    
  }

  render() {
    return (
      <Row>
        <Col lg="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <FormGroup>
                    <i className="bi bi-calendar-event me-2"> </i>
                    Insira a data para ser cadastrada:<br/><br/>
                    <Row>
                        <Col sm={4}>
                            <InputMask
                              mask='99/99/9999'
                              placeholder='DD/MM/AAAA'
                              onChange={this.onDataPChange}>
                              {(inputProps) => <Input {...inputProps} />}
                            </InputMask>
                        </Col> 

                        <Col sm={2}>
                          <Button
                            color="primary"
                            onClick={this.onSubmitSignIn}
                            type="submit"
                            value="Enviar"
                          >Inserir Data</Button>
                        </Col>
                        
                    </Row>
                  </FormGroup>
            </CardTitle>
            <CardBody className="">
                  
                  <DatasBat />
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Tables;

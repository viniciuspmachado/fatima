import LinhaTab from "../../components/LinhaTab";
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Input, FormText } from "reactstrap";
import OptDatasBat from "../../components/OptDatasBat";
import React from 'react';

class Tables extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        datap: ''
    }
};

onDataPChange = (event) => {
  this.setState({datap: event.target.value});
  alert(event.target.value);
};
  
  
  render() {
  
    return (
      <Row>
        <Col lg="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <FormGroup>
                    <i className="bi bi-card-text me-2"> </i>
                    Lista de Participantes de Preparação do Batismo

                    <Col sm={3}>
                    
                      <Input id="dataSelect" name="datapart" type="select" onChange={this.onDataPChange}>
                      <option value='-'>-</option>
                        <OptDatasBat/>
                      </Input>
                    </Col>
                  </FormGroup>
            </CardTitle>
            <CardBody className="">
                  
                  <LinhaTab />
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Tables;

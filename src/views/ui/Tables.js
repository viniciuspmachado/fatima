import LinhaTab from "../../components/LinhaTab";
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Input, FormText } from "reactstrap";
import OptDatasBat from "../../components/OptDatasBat";
import React from 'react';
import { useNavigate } from 'react-router-dom';

class Tables extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        datap: '16/03/2023'
    }
};



onDataPChange = (event) => {
  //const navigate = useNavigate();
  //const {datasel} = req.params;
  this.setState({datap: event.target.value});
  alert(event.target.value);
  //window.location.href = "http://localhost:3000/table#/table/"+this.state.datap;
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
                        <OptDatasBat />
                      </Input>
                    </Col>
                  </FormGroup>
            </CardTitle>
            <CardBody className="">
                  
                  <LinhaTab datasel={this.state.datap} />
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Tables;

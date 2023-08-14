import LinhaTab from "../../components/LinhaTab";
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Input, FormText } from "reactstrap";
import OptDatasBat from "../../components/OptDatasBat";
import React from 'react';
import { useSearchParams } from 'react-router-dom';



class Tables extends React.Component {
  
   constructor(props){
    super(props);
    //alert(window.location.href);
    let variavel = 'zzz';
    this.state = {
        datap: '09/03/2023',
        variavel: window.location.href
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
    const queryString = this.state.variavel;
    const urlParams = new URLSearchParams(queryString);
    const data = urlParams.get('data')
    //const queryParameters = new URLSearchParams(url)
    //const data = queryParameters("data")
    alert('queryString==>'+queryString);
    alert('urlParams==>'+urlParams);
    alert('data==>'+data);
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

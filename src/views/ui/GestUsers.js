import UserSys from "../../components/UserSys";
import { Row, Col, Card, CardTitle, CardBody} from "reactstrap";
import React from 'react';
import Error from "../Error";

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
    if (sessionStorage.getItem('permz')==='0') {
    return (
        
          <Row>
            <Col lg="12">
              <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <h3>
                <i class="bi bi-people-fill"></i>{'  '}Gestão de Usuários
                  </h3>
                </CardTitle>
                <CardBody className="">
                      
                      <UserSys />
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
    );
    } else { 
      return (
        <Error />
      );}
  }
}

export default Tables;

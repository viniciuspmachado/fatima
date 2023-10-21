import React, { useState, useEffect } from 'react';
import LinhaTab from "../../../components/m_batismo/LinhaTab";
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Input, Button } from "reactstrap";
import OptDatasBat from "../../../components/m_batismo/OptDatasBat";
import { useNavigate } from "react-router-dom";
import Error from "../../Error";

const Tables = () => {
  const [variavel] = useState(window.location.hash);
  //const [datap, setDatap] = useState('');
  const [datasel, setDatasel] = useState('');

  const navigate = useNavigate();

  const onSubmitSignIn = () => {
    const queryString = variavel.substring(variavel.indexOf('?'));
    const urlParams = new URLSearchParams(queryString);
    let data = urlParams.get('data');
    if (data != null) {
      data = data.replaceAll("-", "/");
    } else {
      data = '-';
    }
    window.location.replace(process.env.REACT_APP_SERVER_APP + '/#/mostrapdf?data=' + data);
  };

  const onDataPChange = (event) => {
    //setDatap(event.target.value);
    const dataselz = event.target.value.replaceAll("/", "-");
    //alert (dataselz);
    //alert(process.env.REACT_APP_SERVER_APP + '/#/InscBatismo?data=' + dataselz);
    //window.location.replace(process.env.REACT_APP_SERVER_APP + '/#/InscBatismo?data=' + dataselz);
    //window.location.reload();
    navigate('../InscBatismo?data=' + dataselz);
    navigate(0);
  };

  useEffect(() => {
    const queryString = variavel.substring(variavel.indexOf('?'));
    const urlParams = new URLSearchParams(queryString);
    let data = urlParams.get('data');
    if (data != null) {
      data = data.replaceAll("-", "/");
      //alert(data);
    } else {
      data = '-';
    }
    setDatasel(data);
    //alert(datasel);
  }, [variavel]);

  if ((sessionStorage.getItem('permz')==='0') || (sessionStorage.getItem('permz')==='1'))  {

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
                  <Input id="dataSelect" name="datapart" type="select" onChange={onDataPChange}>
                    <option value={datasel}>{datasel}</option>
                    <OptDatasBat />
                  </Input>
                </Col>
                <Col sm={3}>
                  <Button
                    color="primary"
                    onClick={onSubmitSignIn}
                    type="submit"
                    value="Enviar"
                  >Gerar PDF</Button>
                </Col>

              </Row>
            </FormGroup>
          </CardTitle>
          <CardBody className="">
            <LinhaTab datasel={datasel} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
  } else {
    return (
      <Error />
    );}
};

export default Tables;

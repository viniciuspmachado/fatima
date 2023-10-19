import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Sobre esse Sistema
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">Sistema de Controle Paroquial versão 1.0</h2>
                <h5 className=" mb-4">
                 Elaborado por PSITech (<a href="psi-tec.com">psi-tec.com</a>)<br/>
                 Mais informações através do e-mail <b>contato@psi-tec.com</b><br/><br/>
                 Desenvolvido em React/Node.js<br/><br/>
                 Programa de computador registrado no INPI sob o número: 82672877823678/28
                </h5>
                {/* <img
                  src="https://demos.wrappixel.com/free-admin-templates/angular/landingpage-styles/assets/images/screenshots/materialpro-react-pro-lp-img.jpg"
                  alt="my"
                />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;

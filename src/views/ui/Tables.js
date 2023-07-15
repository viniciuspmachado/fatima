import LinhaTab from "../../components/LinhaTab";
import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import {React} from "react";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Hover
          </CardTitle>
          <CardBody className="">
            
            
                
                <LinhaTab />
             
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;

import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import logofatima from "../../assets/images/logos/logofatima.svg";

var cardStyle = {
  height: '50vw',
  position: "relative"
}

const LogoFatima = () => {
  return (
    <div>
      <Card>
        <CardBody style={cardStyle}>
        
        <svg align="center" width="100%" height="100%">
          <image href={logofatima}  />
        </svg>
        

        </CardBody>
      </Card>
    </div>
  );
};

export default LogoFatima;

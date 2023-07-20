import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import logofatima from "../../assets/images/logos/logofatima.svg";

var cardStyle = {
  position: "relative",
  width: "35%"
}


const LogoFatima = () => {
  return (
    <div align="center">
    
          <CardImg style={cardStyle} orientation="top" src={logofatima} />
          <br/><br/><br/>
    </div>
  );
};

export default LogoFatima;

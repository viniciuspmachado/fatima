import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link} from "react-router-dom";

const Blog = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Link to={props.link} className="btn btn-primary">Acesse</Link>
        {/* <Button color={props.color}>Acesse</Button> */}
      </CardBody>
    </Card>
  );
};

export default Blog;

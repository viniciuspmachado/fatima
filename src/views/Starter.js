import { Col, Row } from "reactstrap";
//import SalesChart from "../components/dashboard/SalesChart";
//import Feeds from "../components/dashboard/Feeds";

import Blog from "../components/dashboard/Blog";
import bglogin from "../assets/images/bg/login.png";
import prepbat from "../assets/images/bg/prepbat.png";
import sobre from "../assets/images/bg/sobre.png";
import bg4 from "../assets/images/bg/bg4.jpg";
import LogoFatima from "../components/dashboard/LogoFatima";

const BlogData = [
  {
    image: prepbat,
    title: "Ficha para preparação do Batismo",
    link: "/FichaBatismo",
    description:
      "Preencha a ficha de preparação do batismo e escolha a data para participar da palestra de formação.",
    btnbg: "primary",
  },
  {
    image: bglogin,
    title: "Login Administrativo",
    link: "/login",
    description:
      "Acesso ao conteúdo administrativo do site (requer login cadastrado).",
    btnbg: "primary",
  },
  {
    image: sobre,
    title: "Sobre",
    link: "/about",
    description:
      "Equipe de desenvolvimento. Contacte-nos.",
    btnbg: "primary",
  },
  /* {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  }, */
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
       
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <LogoFatima />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row className='d-flex justify-content-center'>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index} >
            
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
              link={blg.link}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;

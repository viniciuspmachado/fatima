import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
//import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/logos/logoCampanha.svg";


//Navegação Geral
let navigation = [
  
  {
    title: "Login",
    href: "/login",
    icon: "bi bi-person-workspace",
  },
  {
    title: "Ficha Batismo",
    href: "/FichaBatismo",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

//Navegação Batismo
if (sessionStorage.getItem('permz')==='1') {

  navigation = [
    
    
    {
      title: "Cadastro de Datas",
      href: "/CadastroDatas",
      icon: "bi bi-calendar-event",
    },
    {
      title: "Inscritos Batismo",
      href: "/InscBatismo",
      icon: "bi bi-card-text",
    },
    {
      title: "Ficha Batismo",
      href: "/FichaBatismo",
      icon: "bi bi-textarea-resize",
    },
    
    {
      title: "About",
      href: "/about",
      icon: "bi bi-people",
    },
  ];
}

//Navegação do Super Usuário
if (sessionStorage.getItem('permz')==='0') {

    navigation = [
      {
        title: "Dashboard",
        href: "/starter",
        icon: "bi bi-speedometer2",
      },
      {
        title: "Alert",
        href: "/alerts",
        icon: "bi bi-bell",
      },
      {
        title: "Gestão de Usuários",
        href: "/GestUsers",
        icon: "bi bi-people-fill",
      },
      {
        title: "Buttons",
        href: "/buttons",
        icon: "bi bi-hdd-stack",
      },
      {
        title: "Cadastro de Datas",
        href: "/CadastroDatas",
        icon: "bi bi-calendar-event",
      },
      {
        title: "Inscritos Batismo",
        href: "/InscBatismo",
        icon: "bi bi-card-text",
      },
      {
        title: "Ficha Batismo",
        href: "/FichaBatismo",
        icon: "bi bi-textarea-resize",
      },
      {
        title: "Breadcrumbs",
        href: "/breadcrumbs",
        icon: "bi bi-link",
      },
      {
        title: "About",
        href: "/about",
        icon: "bi bi-people",
      },
    ];
  }

const Sidebar = () => {
  
  
  
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  let barra = '';

  if (sessionStorage.getItem('nomez' != '')){
    barra = <div className="bg-dark text-white p-2 opacity-75">Bem-vindo, {sessionStorage.getItem('nomez')}!</div>;
  }

  const onSubmitSignOut = () => {
    sessionStorage.setItem('nomez','')
    sessionStorage.setItem('permz','')
    window.open("/","_self");
  };

  return (
    
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg align-items-center"
        //style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex align-items-center" >
          <center>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={probg} alt="user" width="130"  />
          
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
          </center>
        </div>
        
        {sessionStorage.getItem('nomez') != '' && <div className="bg-dark text-white p-2 opacity-75">Bem-vindo, {sessionStorage.getItem('nomez')}!</div>     }
        
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          {sessionStorage.getItem('nomez') != '' &&
            <Button
              color="danger"
              tag="a"
              target="_blank"
              className="mt-3"
              onClick={() => onSubmitSignOut()}
            >
              <i class="bi bi-door-open-fill"></i> Sair do Sistema
            </Button>
          }
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

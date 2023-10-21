import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  //NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
  Badge,
} from "reactstrap";
//import Logo from "./Logo";
//import { ReactComponent as LogoWhite } from "../assets/images/logos/materialprowhite.svg";
import user1 from "../assets/images/users/user4.jpg";
import Evangelho from "../components/Evangelho";
import logoTop from "../assets/images/logos/logofatimaTop.svg";
//import logoTopMob from "../assets/images/logos/logofatimaTopMob.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <div>
        <Navbar color="primary" dark expand="md" className="fix-header">
        <div className="d-flex align-items-center">
          <div className="d-lg-block d-none me-5 pe-3">
          <img
                src={logoTop}
                alt="profile"
                width="250"
              ></img>
          </div>
          
          <Button
            color="primary"
            className=" d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-list"></i>
          </Button>
        </div>
        <div className="hstack gap-2">
          <Button
            color="primary"
            size="sm"
            className="d-sm-block d-md-none"
            onClick={Handletoggle}
          >
            {isOpen ? (
              <i className="bi bi-x"></i>
            ) : (
              <i className="bi bi-three-dots-vertical"></i>
            )}
          </Button>
        </div>

        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/starter" className="nav-link">
                Início
              </Link>
            </NavItem>
            <NavItem>
              <a href="https://nsfatima.org.br/" target="_blank" className="nav-link"  rel="noreferrer" >
                Quem Somos
              </a>
            </NavItem>
            <NavItem>
              <a href="https://nsfatima.org.br/pastorais" target="_blank" className="nav-link"  rel="noreferrer" >
                Pastorais
              </a>
            </NavItem>
            {/* <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Pastorais
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Batismo</DropdownItem>
                <DropdownItem>Jovens Casais</DropdownItem>
                <DropdownItem>Misericórdia</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <h5><Badge color="red" outline>
              <Evangelho />
          </Badge></h5>

          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="transparent">
              <img
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Info</DropdownItem>
              <DropdownItem>My Account</DropdownItem>
              <DropdownItem>Edit Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>My Balance</DropdownItem>
              <DropdownItem>Inbox</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

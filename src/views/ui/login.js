import React from 'react';
/* import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit'; */
import '../../../src/assets/scss/login.css';
import { Row, Col, Card, Label, Form, FormGroup, Input, Button } from "reactstrap";

function Login() {
  return (
    <div className="App">
        <h2>Iniciar Sessão</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Usuário</Label>
            <Input
              type="user"
              name="user"
              id="user"
              placeholder="usuário"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        <Button>Entrar</Button>
      </Form>
    </div>
  );
}

export default Login;
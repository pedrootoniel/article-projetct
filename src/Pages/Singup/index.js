import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/header.png";

import { Form, Container, Input } from './styles'

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Ainda não estamos funcionando!!");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <Input>
            <input
              className="input"
              type="text"
              placeholder="Nome de usuário"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              className="input"
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input className="input"
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Input>
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>

    );
  }
}

export default SignUp;
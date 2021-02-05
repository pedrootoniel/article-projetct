import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Form, Input } from '@unform/web';
import Logo from "../../assets/header.png";
import { Container } from './styles'

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('O Email informado é inválido')
    .required('O Email é obrigatório'),
  password: yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A Senha é obrigatória')
});

const Login = ({ handleSubmit, initialValues, loginLoading }) => (
  <Container>
    <Form initialData={initialValues} onSubmit={handleSubmit} schema={validationSchema} >
      <img src={Logo} alt="Airbnb logo" />
      {this.state.error && <p>{this.state.error}</p>}
      <Input
        className="input"
        type="text"
        placeholder="Nome de usuário"
      />
      <Input className="input"
        type="password"
        placeholder="Senha"
      />
      <button type="submit"> disabled={loginLoading} {loginLoading ? 'Carregando...' : 'Continuar'}</button>
      <hr />
      <Link to="/">Cadastra-se</Link>
    </Form>
  </Container>

);

export default Login;
import React, { useState } from 'react';
import gql from 'graphql-tag';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, } from 'react-router-dom'
import LoginForm from '../../components/Forms/Login';

const AUTH_USER = gql`
  mutation SetAuth($id: String!,$username: String!, $password: String!) {
    setAuth(id: $id, username: $username, password: $password) @client
  }
`;

const GET_USER = gql`
  {
    currentUser @client {
      id
      username
      password
    }
  }
`;

const Login = () => {

  const [authUser] = useMutation(AUTH_USER);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleOnSubmitLogin = async ({ email, password }) => {
    setLoginLoading(true);
    const authRequest = await authUser({ variables: { email, password } });
    if (authRequest.data.setAuth.code === 'auth/wrong-password' || authRequest.data.setAuth.code === 'auth/user-not-found') {
      Swal.fire({
        title: 'Inválido',
        html: 'Usuário ou senha inválidos',
        type: 'error',
        confirmButtonColor: '#179788'
      });
    }
    if (authRequest.data.setAuth.code === 'auth/too-many-requests') {
      Swal.fire({
        title: 'Erro',
        html: 'Várias tentativas de login inválidas, usuário bloqueado temporariamente',
        type: 'error',
        confirmButtonColor: '#179788'
      });
    }
    setLoginLoading(false);
  }

  const { loading, data } = useQuery(GET_USER);

  if (loading) return <h1>Carregando...</h1>

  if (data.currentUser.status === 'first') return <Redirect to={{ pathname: '/wizard' }} />
  if (data.currentUser.status === 'in') return <Redirect to={{ pathname: '/chat' }} />

  sessionStorage.clear();

  return (
    <LoginForm
      handleSubmit={handleOnSubmitLogin}
      loginLoading={loginLoading}
      initialValues={{
        email: '',
        password: ''
      }}
    />
  );
}

export default Login;

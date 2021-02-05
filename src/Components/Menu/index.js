import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import Artigo from '../../assets/artigo1.png'



import { Container, HomeIcon, ArticleIcon, Button, Wraper, Index, H1, Paragrafo, Input, Index2, ContainerInput, Index3 } from './styles';

// import { Container } from './styles';

const AUTH_USER = gql`
mutation SetAuth($id: String!,$title: String!,$content: content!) {
  setAuth (id: $id, email: $email, password: $password, username: $username)@client
  }
`;

const GET_USER = gql`
  {
    currentUser @client {
      id
     title
      content
    }
  }
`;


const Menu = () => {

  const [authUser] = useMutation(AUTH_USER);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleOnSubmitLogin = async ({ id, title, content }) => {

    setLoginLoading(true);
    const authRequest = await authUser({ variables: { id, title, content } });
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

  sessionStorage.clear();

  return (
    <Container>
      <Wraper>
        <Button active src='/'>
          <Link to='/' className="Link"><HomeIcon />Home</Link>
        </Button>

        <Button active src='/'>
          <Link to='/' className="Link1"><ArticleIcon />Escrever</Link>
        </Button>
      </Wraper>

      <Index>
        <Index2>
          <H1>Bem vindo(a)!</H1>
          <hr />
          <Paragrafo>Sua plataforma de artigos</Paragrafo>
          <ContainerInput>
            <Input placeholder="Buscar artigo..." />
            <span className="iconify" data-icon="bx:bx-search-alt" data-inline="false" />
          </ContainerInput>
        </Index2>
        <Index3>
          <img src={Artigo} />
          <div className="paragrafo">
            <strong>Where does it come from?</strong>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
          </div>
        </Index3>
        <Index3>
          <img src={Artigo} />
          <div className="paragrafo">
            <strong>Where does it come from?</strong>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
          </div>
        </Index3>
      </Index>


    </Container >
  )
}

export default Menu;
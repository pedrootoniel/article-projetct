import React from 'react';
import { Container, } from './styles'
import Header from '../../Components/Header'
import Login from '../../Pages/Login'

// import { Container } from './styles';

function Home() {
  return (

    <Container>
      <Header />
      <Login />
    </Container>
  )
}

export default Home;
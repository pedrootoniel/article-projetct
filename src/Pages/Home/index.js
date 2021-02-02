import React from 'react';
import { Container, } from './styles'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'

// import { Container } from './styles';

function Home() {
  return (

    <Container>
      <Header />
      <Menu />
    </Container>
  )
}

export default Home;
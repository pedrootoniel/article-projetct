import React from 'react';
import { Container, Topo, Img } from './styles'
import Banner from '../../assets/header.png'

// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Topo><Img src={Banner} />
      </Topo>
    </Container>
  )
}

export default Header;
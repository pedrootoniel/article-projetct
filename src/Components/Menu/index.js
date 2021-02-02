import React from 'react';
import { Link } from 'react-router-dom'


import { Container, HomeIcon, ArticleIcon, Button, Wraper, Index, Span, Paragrafo, Input, Index2 } from './styles';

// import { Container } from './styles';

function Menu() {
  return (
    <Container>
      <Wraper>
        <Button className='active' src='/'>
          <Link to='/' className="Link"><HomeIcon />Home</Link>
        </Button>

        <Button className='active' src='/'>
          <Link to='/' className="Link1"><ArticleIcon />Escrever</Link>
        </Button>
      </Wraper>

      <Index>
        <Index2>
          <Span>Bem vindo(a)!</Span>
          <Paragrafo>Sua plataforma de artigos</Paragrafo>
          <Input placeholder="Buscar artigo..." ><i class="fas fa-search-plus" /></Input>
        </Index2>
      </Index>

    </Container>
  )
}

export default Menu;
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid/Home'
import { Article } from '@styled-icons/remix-line/Article'


export const Container = styled.div`
display:flex;
justify-content:center;
background-color:#1675AA;
height:100%;
width:100%;
.Link{
    margin-bottom:390px;
    color:white;
    font-size:19px;
    outline:none;
    text-decoration:none;
    font-family: 'Maven Pro', sans-serif;
  }
  
  .Link1{
    color:white;
    font-size:19px;
    outline:none;
    text-decoration:none;
    font-family: 'Maven Pro', sans-serif;
  }
`;

export const Wraper = styled.div`
  display:flex;
  flex-direction:column;
`

export const HomeIcon = styled(Home)`
  color:white;
  height:30px;
`;

export const ArticleIcon = styled(Article)`
  color:white;
  height:30px;
`;

export const Button = styled.button`
  display:flex;
  justify-content:center;
  color:white;
  background-color:transparent;
  outline:none;
  text-decoration:none;
  border:0;
  margin:30px;
  width:80px;
  height:80px;

`;

export const Index = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-right:400px;
  background-color:white;
  width:1200px;
  height:800px;
`
export const Span = styled.span` 
  padding:30px;
  font-size:20px;
  font-weight: 900;
  
`
export const Paragrafo = styled.p`
  margin-bottom:-5px;
  margin-left:10px;
  padding:20px;
  font-weight:Bold 700;
`
export const Input = styled.input`
  margin-left:30px;
  padding:10px;
  width:1000px;
  height:40px;
  outline:none;
`
export const Index2 = styled.div`

  padding:20px;
  justify-content:center;
  background-color:#EEEEEE;


`

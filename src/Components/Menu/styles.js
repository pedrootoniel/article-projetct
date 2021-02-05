import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid/Home'
import { Article } from '@styled-icons/remix-line/Article'
import { shade } from 'polished'


export const Container = styled.div`
display:flex;
justify-content:center;
background-color:#1675AA;
height:100%;
width:100%;
.Link{
  display:flex;
    margin-bottom:390px;
    color:white;
    font-size:19px;
    outline:none;
    text-decoration:none;
    font-family: 'Maven Pro', sans-serif;
  }
  
  .Link1{
    display:flex;
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
  width:100%;
  height:80px;
  padding:10px;
  a{
    
    :active{
      background-color:${shade(0.2, '#1675AA')};
    }
  }

`;

export const Index = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-right:400px;
  background-color:white;
  width:1200px;
  height:800px;
  padding:10px;
`
export const H1 = styled.h1` 
  padding:30px;
`
export const Paragrafo = styled.p`
  margin-bottom:-5px;
  margin-left:10px;
  padding:20px;
  font-weight:Bold 700;
`
export const Input = styled.input`
  margin-left:30px;

  width:1000px;
  height:40px;
  outline:none;
  border:0;
`
export const Index2 = styled.div`
  padding:20px;
  justify-content:center;
  background-color:#EEEEEE;

  hr{
   border:3px solid;
  }
`

export const ContainerInput = styled.div`
  display:flex;
  align-items:center;
  background-color:white;
  
.iconify{
    display:flex;
    margin-right:10px;
    font-size:30px;

  }
`
export const Index3 = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:colunm;
  margin:30px;
  padding:20px;
  width:1080px;
  background-color:#EEEEEE;
  img{
    display:flex;
  }
  strong{
    display:flex;
    padding:15px;
    font-size:20px;
    flex-direction:colunm;
    color:red;
  }
  p{
    padding:10px;
  }

`

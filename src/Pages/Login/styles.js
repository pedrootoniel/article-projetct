import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:#7AA1D2;
`;

export const Form = styled.form`
  width: 400px;
  background-color:rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px #eee;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  button {
    background-image: linear-gradient(to right, #2c3e50 0%, #3498db  51%, #2c3e50  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            outline:none;
            &:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }     
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: var(--color-white);
    text-decoration: none;
    box-shadow: 0 0 20px #eee;
  }
`;

export const Input = styled.div`
.input {
  flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    outline:none;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  
  `
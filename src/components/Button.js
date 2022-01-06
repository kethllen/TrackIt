import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  border: 1px solid #D4D4D4;
  background-color: #52B6FF;
  color: #FFFFFF;
  opacity: ${(props) => typeof props.active !== 'boolean' || props.active ? "0.7" : ''};
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  margin-bottom: 25px;
  border-radius: 4.636363506317139px;
  cursor: pointer; 
  ::placeholder {
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export default Button;
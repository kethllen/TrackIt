import styled from "styled-components";

const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #D4D4D4;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#AFAFAF" : "#000000"};
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  ::placeholder {
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export default Input;
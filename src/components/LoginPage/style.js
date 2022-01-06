import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  width: 303px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledLink = styled(Link)`
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  color: #52B6FF;
  text-decoration: underline;
  cursor: pointer; 
`;

export {
  Container,
  StyledLink
}

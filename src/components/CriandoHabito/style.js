import styled from 'styled-components'

const Habito = styled.div`
height: 180px;
width: 90%;
margin-left: 18px;
margin-top:20px;
border-radius: 5px;
padding-top: 18px;
padding-left: 18px;
padding-right:18px;
background: #FFFFFF;
position: relative;
display: ${({mostrar}) => !mostrar && 'none'};
`
const DiasdaSemana = styled.div`
height: 30px;
display: flex;
margin-top:8px;
gap:4px;

`
const Dia = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #D4D4D4;
  background-color: ${({days, active}) => days.includes(active) ? "#CFCFCF" : "#FFFFFF"};
  color: ${({days, active}) => days.includes(active) ? "#FFFFFF" : "#DBDBDB"}; 
  font-family: 'Lexend Deca', sans-serif;
  padding-bottom: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;

`
const Button = styled.button`
  height: 35px;
  width: 84px;
  border: 1px solid #D4D4D4;
  background-color: #52B6FF;
  color: #FFFFFF;
  opacity: ${(props) => typeof props.active !== 'boolean' || props.active ? "0.7" : ''};
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 4.64px;
  cursor: pointer;
  position:absolute;
  bottom:15px;
  right:16px ;
`;

const Cancelar = styled.div`

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #52B6FF;
position:absolute;
bottom:23px;
right:123px ;
`

export {Habito, Dia, DiasdaSemana, Cancelar, Button}
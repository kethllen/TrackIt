import styled from 'styled-components'

const Habito = styled.div`
height: 91px;
width: 90%;
margin-left: 18px;
margin-top:20px;
border-radius: 5px;
padding-top: 13px;
padding-left: 15px;
padding-right:10px;
background: #FFFFFF;
position: relative;
`

const Titulo = styled.div`

font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
color: #666666;
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
const Lixeira = styled.div`
    height: 20px;
    width: 18px;
    color: #666666;
    position: absolute;
    right: 10px;
    top:11px;
    *{
        width: 100%;
        height: 100%;
    }

`

export {Habito, Dia, DiasdaSemana, Titulo,Lixeira}
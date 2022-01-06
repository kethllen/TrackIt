import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PorcentContext from "../../contexts/PorcentContext";



const Navbar = styled.div`
    height: 70px;
    width: 100%;
    background: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    display: flex;
    justify-content: space-between;
    padding-right:18px;
    padding-left:18px;
    position:fixed;
    top:0px;
    left: 0px;
    align-items: center;

    span{
        height: 49px;
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-style: normal;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;

    }
    img{
        height: 51px;
        width: 51px;
        border-radius: 98.5px;
    }

`
const Foot = styled.div`
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding-right:31px;
    padding-left:36px;
    position:fixed;
    bottom:0px;
    left: 0px;
    align-items: center;
    span{
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        color: #52B6FF;

    }

`
const Centro = styled.div`
    width: 91px;
    height: 91px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    bottom:10px;
    left: 0;
    right: 0;
    text-align: center;
    span{   
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
        position:absolute;
        margin-left: auto;
        margin-right:auto;
        padding-left: 6px;
        bottom:28.5px;
        left: 0;
        right: 0;
        z-index:10;
    }
    img{
        width: 100%;
        height: 100%;
    }
`
const ProgressBar = styled(CircularProgressbar)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    

`;

const Conteudo = styled.div`
    min-height:100vh;
    width: 100%;
    background-color: #E5E5E5;
`
const Data = styled.div`
    padding-top:98px;
    padding-left:17px;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 23px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color:#126BA5;
    }
    span{
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: ${props => props.porcent ==0 ? "#BABABA":"#8FC549"};
    }
`

export {Centro, Foot,Navbar, ProgressBar, Conteudo, Data}
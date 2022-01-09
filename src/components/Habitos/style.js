import styled from 'styled-components'

const Habito = styled.div`
width: 90%;
margin-bottom:10px;
padding-left: 15px;
padding-right: 13px;
padding-top: 13px;
padding-bottom: 17px;
margin-left: 18px;
border-radius: 5px;
background: #FFFFFF;
position: relative;
display: flex;
justify-content: space-between;

`
const DescriptionHabito = styled.div`
padding-right: 15px;
h1{

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
}
span{

    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
    display:flex;
    flex-direction:row;
    h3{
    color:${props => props.done == false ? "#666666":"#8FC549"};
    }
    h4{
    color:${props => props.record == false ? "#666666":"#8FC549"};
    }
 }

`

const Check  = styled.div`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    background: ${props => props.done == false ? "#EBEBEB":"#8FC549"};
    border: ${props => props.done == false ? "1px solid #E7E7E7":""};
    display:flex;
    align-items: center;
    justify-content: center;
    .icone{
        height: 28px;
        width: 35px;
        color: #FFFFFF;
    }
`

export {Habito, DescriptionHabito, Check}
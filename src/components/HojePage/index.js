import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Centro, Foot,Navbar, ProgressBar, Conteudo, Data} from './style';
import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import ImageContext from "../../contexts/ImageContext";
import PorcentContext from "../../contexts/PorcentContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'dayjs/locale/br';
import Habitos from "../Habitos"
import { Link } from 'react-router-dom';

export default function HojePage(){
    var dayjs = require('dayjs')
    const {token, setToken} = useContext(TokenContext)
    const {name, setName} = useContext(NameContext)
    const {image, setImage} = useContext(ImageContext)
    const {porcent, setPorcent} = useContext(PorcentContext)
    const [habitos, setHabitos] = useState(null);
    const [check, setCheck] = useState(0);
    let feitos=0 ;
    let dia = dayjs().locale('pt-br').format('dddd')
    let data = dayjs().locale('pt-br').format('DD/MM')
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    useEffect(()=>  {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(response => {
            setHabitos(response.data);
            console.log(habitos)
          });
          promise.catch(error => {
            alert(error.response.data.message)
          });
    },[check])
    
    const diasDaSemana ={
        Monday: 'Segunda',
        Tuesday: 'Terça',
        Wednesday: 'Quarta',
        Thursday: 'Quinta',
        Friday: 'Sexta',
        Saturday: 'Sábado',
        Sunday: 'Domingo'
    }
    setPorcent(0);
    data = diasDaSemana[dia] +', '+ data;
    if(habitos!== null){
        habitos.map(habito => (habito.done ==true) && feitos++)
        let porc = Math.ceil((feitos/(habitos.length))*100)
        if(porcent > 0)setPorcent(porc)
    }
    if(token=='')
        return;
    return(
        <Conteudo>
            <Navbar>
                <span>TrackIt</span>
                <img src={image}></img>
            </Navbar>
            <Data porcent={porcent}>
                <h1>{data}</h1>
                <span>{(porcent==0||porcent==NaN) ? "Nenhum hábito concluído ainda": `${porcent}% dos hábitos concluídos`}</span>
            </Data>
            {habitos!== null ? habitos.map(habito => <Habitos id={habito.id} name= {habito.name} currentSequence={habito.currentSequence} highestSequence={habito.highestSequence} done={habito.done} check={check} setCheck={setCheck}/>):''}
            <Foot>
                <Link to={`/habitos`}>
                    <span>Hábitos</span>
                </Link>
                <Link to={`/historico`}>
                    <span>Histórico</span>
                </Link>
            </Foot>
            <Centro>
                <ProgressBar
                    value={porcent}
                    text={``}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
                <span>Hoje</span>
            </Centro>
        </Conteudo>
    );
}


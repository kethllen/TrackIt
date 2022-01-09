import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Centro, Foot,Navbar, ProgressBar, Conteudo, Titulo, SubTitulo} from './style';
import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import ImageContext from "../../contexts/ImageContext";
import PorcentContext from "../../contexts/PorcentContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'dayjs/locale/br';
import { Link } from 'react-router-dom';
import { MdAdd as IconeAdicionar } from 'react-icons/md';
import CriandoHabito from "../CriandoHabito"
import HabitoCriado from '../HabitoCriado';

export default function HabitosPage(){
    var dayjs = require('dayjs')
    const [criar, setCriar] = useState(false);
    const [atualizar, setAtualizar] = useState(0);
    const {token, setToken} = useContext(TokenContext)
    const {name, setName} = useContext(NameContext)
    const {image, setImage} = useContext(ImageContext)
    const {porcent, setPorcent} = useContext(PorcentContext)
    const [habitos, setHabitos] = useState(null);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    useEffect(()=>  {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then(response => {
            setHabitos(response.data);
          });
          promise.catch(error => {
            alert(error.response.data.message)
          });
    }, [atualizar])
  
    if(token=='')
        return;
    return(
        
        <Conteudo>
            <Navbar>
                <span>TrackIt</span>
                <img src={image}></img>
            </Navbar>
            <Titulo>
                <h1>Meus hábitos</h1>
                <div onClick={()=> setCriar(true)}>
                    <IconeAdicionar className="icone"/>
                </div>
            </Titulo>
            {criar===true &&
            <CriandoHabito setCriar={setCriar} setAtualizar={setAtualizar} atualizar={atualizar}/>}
            {(habitos === null || habitos.length===0) ?
            <SubTitulo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </SubTitulo>: (habitos!== null || atualizar>0) ? habitos.map(habito => <HabitoCriado id={habito.id} name= {habito.name} days={habito.days} setAtualizar={setAtualizar} atualizar={atualizar}/>):''}
            <Foot>
                <Link to={`/habitos`}>
                    <span>Hábitos</span>
                </Link>
                <Link to={`/historico`}>
                    <span>Histórico</span>
                </Link>
            </Foot>
            <Centro>
                <Link to={`/hoje`}>
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
                </Link>
            </Centro>
        </Conteudo>
    );
}
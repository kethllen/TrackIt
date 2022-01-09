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

export default function HistoricoPage(){
    const {token, setToken} = useContext(TokenContext)
    const {image, setImage} = useContext(ImageContext)
    const {porcent, setPorcent} = useContext(PorcentContext)
    if(token=='')
        return;
    return(
        <Conteudo>
            <Navbar>
                <span>TrackIt</span>
                <img src={image}></img>
            </Navbar>
            <Titulo>
                <h1>Histórico</h1>
            </Titulo>
            <SubTitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitulo>
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
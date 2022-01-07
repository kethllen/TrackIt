import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Centro, Foot,Navbar, ProgressBar, Conteudo, Titulo} from './style';
import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import ImageContext from "../../contexts/ImageContext";
import PorcentContext from "../../contexts/PorcentContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'dayjs/locale/br';
import { Link } from 'react-router-dom';
import { MdAdd as IconeAdicionar } from 'react-icons/md';

export default function HabitosPage(){
    var dayjs = require('dayjs')
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
    return(
        
        <Conteudo>
            <Navbar>
                <span>TrackIt</span>
                <img src={image}></img>
            </Navbar>
            <Titulo>
                <h1>Meus hábitos</h1>
                <div>
                    <IconeAdicionar className="icone"/>
                </div>
            </Titulo>
            {/* {habitos!== null ? habitos.map(habito => <Habitos id={habito.id} name= {habito.name} currentSequence={habito.currentSequence} highestSequence={habito.highestSequence} done={habito.done}/>):''} */}
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
import {Habito, Dia, DiasdaSemana, Titulo, Lixeira} from "./style"
import Input from "../Input"
import React, { useContext, useEffect, useState } from 'react';
import LoadButton from '../../assets/LoadButton';
import axios from 'axios';
import { useNavigate } from 'react-router';
import TokenContext from "../../contexts/TokenContext";
import { BsTrash as Lixo } from 'react-icons/bs';
export default function HabitoCriado({id, name, days, setAtualizar, atualizar}){
    const [active, setActive] = useState(false);
    const {token, setToken} = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    function remover(){
        if (window.confirm("Você realmente quer remover este habito?")) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then(response => {
                setAtualizar(atualizar +1);
            });
            promise.catch(error => {
                alert(error.response.data.message)
            });
        }
    }
    return (
        
        <Habito>
            <Titulo>{name}</Titulo>
            <DiasdaSemana>
                <Dia  active={0} days={days}>D</Dia>
                <Dia  active={1} days={days}>S</Dia>
                <Dia  active={2} days={days}>T</Dia>
                <Dia  active={3} days={days}>Q</Dia>
                <Dia  active={4} days={days}>Q</Dia>
                <Dia  active={5} days={days}>S</Dia>
                <Dia  active={6} days={days}>S</Dia>
            </DiasdaSemana>
            <Lixeira onClick={()=> remover()}><Lixo/></Lixeira>
        </Habito>
    )
}


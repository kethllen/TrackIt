import React, { useContext, useEffect, useState } from 'react';
import {Habito, DescriptionHabito, Check} from './style';
import { BsCheckLg as IconeCheck } from 'react-icons/bs';
import TokenContext from "../../contexts/TokenContext";
import axios from 'axios';

export default function Habitos({name,currentSequence,highestSequence, done, id, setCheck, check}){
    let record=false;
    const [click, setClick] = useState(false);
    const {token, setToken} = useContext(TokenContext)
    if(currentSequence==highestSequence && highestSequence  !== 0) record=true;
    function realizarHabito(){
        const promise = axios.post(`${done==false ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check` : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck` }`,{},{headers: {
            "Authorization": `Bearer ${token}`
        }});
    
        promise.then(response => {
            setCheck(check+1); 
        });
        promise.catch(error => {
            alert(error.response.data.message)
        });
    }
    return(
        <Habito>
            <DescriptionHabito done={done} record = {record}>
                <h1>{name}</h1>
                <span>Sequência atual: <h3> {currentSequence} dias</h3></span>
                <span>Seu recorde: <h4> {highestSequence} dias</h4></span>
            </DescriptionHabito>
            <Check done={done} onClick={()=>realizarHabito()}>
                <IconeCheck className="icone"/>
            </Check>
        </Habito>
    );
}
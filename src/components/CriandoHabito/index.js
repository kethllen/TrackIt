import {Habito, Dia, DiasdaSemana, Cancelar, Button} from "./style"
import Input from "../Input"
import React, { useContext, useEffect, useState } from 'react';
import LoadButton from '../../assets/LoadButton';
import axios from 'axios';
import { useNavigate } from 'react-router';
import TokenContext from "../../contexts/TokenContext";

export default function CriandoHabito({setCriar, setAtualizar, atualizar}){
    const [formData, setFormData] = useState({
        name: '',
        days: []
      });
    const [active, setActive] = useState(false);
    const [click, setClick] =useState(false);
    const {token, setToken} = useContext(TokenContext)
    const navigate = useNavigate();
    function handleSave(e) {
        e.preventDefault();
        setActive(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", formData, {headers: {
            "Authorization": `Bearer ${token}`
        }});
    
        promise.then(response => {
            setCriar(false);
            setAtualizar(atualizar+1);
            
        });
        promise.catch(error => {
            alert(error.response.data.message)
            setFormData({
                name: '',
                days: []
              })
        });
    }
    return (
        
        <Habito>
            <form onSubmit={handleSave}>
            <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    name="name"
                    placeholder="nome do hábito"
                    active={active}
                />
            <DiasdaSemana>
                <Dia  active={7} days={formData.days} onClick={()=>  {formData.days.includes(7) ? formData.days.splice(formData.days.indexOf(7), 1) :
                                                                        formData.days.push(7); (click === false) ? setClick(true): setClick(false)}}>D</Dia>
                <Dia  active={1} days={formData.days} onClick={()=>  {formData.days.includes(1) ? formData.days.splice(formData.days.indexOf(1), 1) :
                    formData.days.push(1); (click === false) ? setClick(true): setClick(false)}}>S</Dia>
                <Dia  active={2} days={formData.days} onClick={()=>  {formData.days.includes(2) ? formData.days.splice(formData.days.indexOf(2), 1) :
                    formData.days.push(2); (click === false) ? setClick(true): setClick(false)}}>T</Dia>
                <Dia  active={3} days={formData.days} onClick={()=>  {formData.days.includes(3) ? formData.days.splice(formData.days.indexOf(3), 1) :
                    formData.days.push(3); (click === false) ? setClick(true): setClick(false)}}>Q</Dia>
                <Dia  active={4} days={formData.days} onClick={()=>  {formData.days.includes(4) ? formData.days.splice(formData.days.indexOf(4), 1) :
                    formData.days.push(4); (click === false) ? setClick(true): setClick(false)}}>Q</Dia>
                <Dia  active={5} days={formData.days} onClick={()=>  {formData.days.includes(5) ? formData.days.splice(formData.days.indexOf(5), 1) :
                    formData.days.push(5); (click === false) ? setClick(true): setClick(false)}}>S</Dia>
                <Dia  active={6} days={formData.days} onClick={()=>  {formData.days.includes(6) ? formData.days.splice(formData.days.indexOf(6), 1) :
                    formData.days.push(6); (click === false) ? setClick(true): setClick(false)}}>S</Dia>
            </DiasdaSemana>
            <Cancelar onClick={()=> setCriar(false)}>Cancelar</Cancelar>
            <Button type="submit" active={active}>{active ? <LoadButton/> : "Salvar"}</Button>
            </form>
        </Habito>
    )
}
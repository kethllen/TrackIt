import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Logo from '../../assets/Logo'
import LoadButton from '../../assets/LoadButton';
import Input from '../Input';
import Button from '../Button';
import {Container,StyledLink} from './style';

export default function CadastroPage(){
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
      });
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
    function handleSingUp(e) {
        e.preventDefault();
        setActive(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", formData);
    
        promise.then(response => {
          navigate('/')
        });
        promise.catch(error => {
            alert(error.response.data.message)
            setFormData({
                email: '',
                name: '',
                image: '',
                password: ''
              })
            setActive(false);
        });
    }

    return(
        <Container>
            <form onSubmit={handleSingUp}>
                <Logo/>
                <Input
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="email"
                    active={active}
                />
                <Input
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="senha"
                    active={active}
                />
                <Input
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                    placeholder="nome"
                    active={active}
                />

                <Input
                    type="text"
                    value={formData.image}
                    onChange={handleInputChange}
                    name="image"
                    placeholder="foto"
                    active={active}
                />
                <Button type="submit" active={active}>{active ? <LoadButton/> : "Cadastrar"}</Button>
                
            </form>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Container>       
    );
}

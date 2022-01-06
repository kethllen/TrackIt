import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Logo from '../../assets/Logo'
import LoadButton from '../../assets/LoadButton';
import Input from '../Input';
import Button from '../Button';
import {Container,StyledLink} from './style';
import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import ImageContext from "../../contexts/ImageContext";


export default function LoginPage(){
    const {token, setToken} = useContext(TokenContext)
    const {name, setName} = useContext(NameContext)
    const {image, setImage} = useContext(ImageContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    function handleLogin(e) {
        e.preventDefault();
        setActive(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
          email,
          password
        });
    
        promise.then(response => {
          setToken(response.data.token);
          setName(response.data.name);
          setImage(response.data.image);
          navigate('/hoje')
        });
        promise.catch(error => {
            alert(error.response.data.message)
            setEmail('');
            setPassword('');
            setActive(false);
        });
    }

    return(
        <Container>
            <form onSubmit={handleLogin}>
                <Logo/>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" active={active}/>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" active={active}/>
                <Button type="submit" active={active}>{active ? <LoadButton/> : "Entrar"}</Button>
                
            </form>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>       
    );
}
import React from 'react';
import Trackit from './logo.png'
import styled from 'styled-components'

function Logo (){
  return (
    <Container>
      <img src={Trackit}/>
    </Container>

  );
}

export default Logo;

const Container = styled.div`

    margin-top: 68px;
    margin-bottom:32px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 178px;
        width: 180px;
    }`
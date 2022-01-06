import React from 'react';
import Load from './loadButton.gif'
import styled from 'styled-components'

function LoadButton(){
  return (
    <Container>
      <img src={Load}/>
    </Container>

  );
}

export default LoadButton;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 23px;
        width: 43px;
        margin-bottom:25px;
    }`;
import React from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button`
  outline: none;
  border: ${props => props.type === 'primary' ? 'none': "1px solid #fff"};
background-color: ${props => props.type === 'primary' ? '#5a67d8' : 'transparent' };
  padding: 0.6em 2em;
  color: #fff;
  border-radius: 0.4em;

`




export default function CustomButton({children, ...props}){

    return <ButtonStyled {...props}>{children}</ButtonStyled>
}
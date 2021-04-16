import React from 'react';
import styled from "styled-components";

const ButtonSign = styled.button`
    padding: 8px 18px;
    color: #058373;
    background: rgba(5, 131, 115, .1);
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all .2s;
    white-space: nowrap;
    outline: none;
    
    &:hover {
        background: rgba(5, 131, 115, .2);
    }
`

const Button = () => {
    return (
        <ButtonSign>Sign out</ButtonSign>
    );
}

export default Button;
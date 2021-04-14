import React from 'react';
import styled from "styled-components";

const ButtonSign = styled.button`
    padding: 8px 18px;
    color: #058373;
    background: rgba(5, 131, 115, 0.1);
    border-radius: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.2s all;
    
    &:hover {
        background: rgba(5, 131, 115, 0.2);
    }
    
    @media (max-width: 900px) {
        display: none;
    }
`

const Button = () => {
    return (
        <ButtonSign>Sign out</ButtonSign>
    );
}

export default Button;
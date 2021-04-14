import React from 'react';
import styled from "styled-components";
import Button from './Button';

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = (props) => {
    return (
        <Top>
            {props.children}
        </Top>
    );
}

export default Header;
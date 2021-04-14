import React from 'react';
import styled from "styled-components";
import Menu from './Menu';
import BottomIcon from './BottomIcon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 247px;
    padding: 45px 24px;
    box-sizing: border-box;
    background: #E8EAF0;
    
    @media (max-width: 1440px) {
        padding-top: calc(30px + (45 - 30)*(100vw - 320px)/(1440 - 320));
    }
    
    @media (max-width: 900px) {
        display: none;
    }
`

const Sidebar = () => {
    return (
        <Wrapper>
            <Menu />
            <BottomIcon />
        </Wrapper>
    );
}

export default Sidebar;
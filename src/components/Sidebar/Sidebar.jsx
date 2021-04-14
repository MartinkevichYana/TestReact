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
    
    &.mobile {
        position: absolute;
        top: 56px;
        z-index: 10;
        width: 100%;
        max-width: 320px;
        background: #fff;
        box-shadow: 0px 4px 7px rgb(12 20 39 / 10%);
    }
`

const Sidebar = ({isMobile}) => {
    return (
        <Wrapper className={isMobile ? "mobile" : ""} >
            <Menu isMobile={isMobile} />
            <BottomIcon isMobile={isMobile} />
        </Wrapper>
    );
}

export default Sidebar;
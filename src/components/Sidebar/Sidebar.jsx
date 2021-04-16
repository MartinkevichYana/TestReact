import React from 'react';
import styled from "styled-components";
import Menu from './Menu';
import BottomIcon from './BottomIcon';
import {IS_MOBILE} from "../../constants";

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 247px;
    height: 100%;
    padding: 45px 24px;
    box-sizing: border-box;
    background: #E8EAF0;
    
    @media (max-width: 1440px) {
        padding-top: calc(30px + (45 - 30)*(100vw - 320px)/(1440 - 320));
    }
    
    &.mobile {
        top: 56px;
        z-index: 10;
        width: 100%;
        background: #fff;
    }
`

const Sidebar = () => {
    return (
        <Wrapper className={IS_MOBILE ? "mobile" : ""} >
            <Menu />
            <BottomIcon />
        </Wrapper>
    );
}

export default Sidebar;
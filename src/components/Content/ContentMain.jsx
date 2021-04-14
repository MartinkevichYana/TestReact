import React from 'react';
import styled from "styled-components";
import arrow from '../../images/arrow-left.svg';
import Header from './Header';
import Title from "./Title";
import MainContent from "./MainContent";
import Button from "./Button";

const Wrapper = styled.div`
    padding: 44px;
    
    @media (max-width: 1440px) {
        padding: calc(15px + (44 - 15)*(100vw - 320px)/(1440 - 320));
    }
`

const Arrow = styled.div`
    @media (max-width: 900px) {
        display: none;
    }
`

const ContentMain = (props) => {

    return (
        <Wrapper>
            <Header>
                <Arrow><img src={arrow} alt="arrow left" /></Arrow>
                <Button />
            </Header>
            <Title />
            <MainContent content={props.content} />
        </Wrapper>
    );
}

export default ContentMain;
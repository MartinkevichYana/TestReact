import React from 'react';
import styled from "styled-components";
import arrow from '../../images/arrow-left.svg';
import Header from './Header';
import Title from "./Title";
import MainContent from "./MainContent";
import Button from "./Button";
import {IS_MOBILE} from "../../constants";

const Wrapper = styled.div`
    width: 100%;
    padding: 44px;
    margin-left: 250px;
    box-sizing: border-box;
    
    @media (max-width: 1440px) {
        padding: calc(15px + (44 - 15)*(100vw - 320px)/(1440 - 320));
    }
    &.mobile {
        margin-left: 0;
    }
`

const ContentMain = ({content}) => {

    return (
        <Wrapper className={IS_MOBILE ? "mobile" : ""}>
            {!IS_MOBILE && <Header>
                <div><img src={arrow} alt="arrow left" /></div>
                <Button />
            </Header>}
            <Title />
            <MainContent content={content} />
        </Wrapper>
    );
}

export default ContentMain;
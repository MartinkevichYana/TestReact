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
    &.mobile {
        opacity: 0.2;
    }
`

const ContentMain = ({content, contentTitle, isSidebarVisible, isMobile}) => {

    return (
        <Wrapper className={isSidebarVisible && isMobile ? "mobile" : ""}>
            {!isMobile && <Header>
                <div><img src={arrow} alt="arrow left" /></div>
                <Button />
            </Header>}
            <Title />
            <MainContent content={content} contentTitle={contentTitle} isMobile={isMobile} />
        </Wrapper>
    );
}

export default ContentMain;
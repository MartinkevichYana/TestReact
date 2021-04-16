import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 99;
    height: 56px;
    padding: 16px;
    background-color: #0C1427;
    box-sizing: border-box;
`

const BurgerBtn = styled.button`
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    outline: none;
`

const BurgerBtnItem = styled.span`
    width: 20px;
    height: 3px;
    margin-bottom: 2px;
    background-color: #fff;
    border-radius: 1.1px;
    
    &.close {
        position: absolute;
        &:nth-child(odd) {
            transform: rotate(45deg);
        }
        &:nth-child(2n) {
            transform: rotate(-45deg);
        }
    }
`

const HeaderMobile = ({handleSidebarVisibility, isSidebarVisible}) => {

    return (
        <Container>
            <BurgerBtn onClick={handleSidebarVisibility} >
                <BurgerBtnItem className={isSidebarVisible ? "close" : ""} />
                <BurgerBtnItem className={isSidebarVisible ? "close" : ""} />
                <BurgerBtnItem className={isSidebarVisible ? "close" : ""} />
            </BurgerBtn>
        </Container>
    );
}

export default HeaderMobile;
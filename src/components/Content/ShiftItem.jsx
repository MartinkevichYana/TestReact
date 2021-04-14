import React from 'react';
import styled from "styled-components";
import Content from './Content';
import ShiftTitle from "./ShiftTitle";

const SvgIcon = styled.svg`
    width: 15px;
    height: 15px;
    fill: ${props => props.color ? props.color : "#0c1427"};
    @media (max-width: 700px) {
        display: none;
    }
`

const TextNearImg = styled.span`
    margin-left: 10px;
    @media (max-width: 700px) {
        margin-left: 0;
    }
`

const GridContent = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 1.2fr;
    &.border {
        margin-bottom: 10px;
        border: 1px solid rgba(12, 20, 39, 0.05);
        box-sizing: border-box;
        box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
        border-radius: 20px;
    }
`

const GridItem = styled.div`
    padding: 18px;
    
    &:first-child {
        border-radius: 20px 0 0 20px;
    }
    
    &:last-child {
        border-radius: 0 20px 20px 0;
    }
`

const GridItemContent = styled.div`
    display: flex;
`

const ShiftItem = (props) => {

    return (
        <Content className="border">
            <GridItem>
                <GridItemContent>
                    <SvgIcon><use xlinkHref='/images/sprite.svg#man'></use></SvgIcon>
                    <TextNearImg>January 06, 2020</TextNearImg>
                </GridItemContent>
            </GridItem>
            <GridItem>Afternoon</GridItem>
            <GridItem>
                <GridItemContent>
                    <SvgIcon color={'transparent'}><use xlinkHref='/images/sprite.svg#clock'></use></SvgIcon>
                    <TextNearImg>15:00 - 23:00</TextNearImg>
                </GridItemContent>
            </GridItem>
            <GridItem>8h</GridItem>
            <GridItem>$1,630</GridItem>
            <GridItem>30</GridItem>
        </Content>
    );
}

export default ShiftItem;
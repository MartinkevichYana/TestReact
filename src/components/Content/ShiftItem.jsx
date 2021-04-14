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
    &.mobile {
        padding: 8px 0;
        width: 48%;
        text-align: right;
    }
`

const GridItemContent = styled.div`
    display: flex;
    &.mobile {
        justify-content: flex-end;
    }
`

const ShiftItem = (props) => {

    return (
        /*<Content className="border mobileGrid">
            <ShiftTitle className="mobile" />
            <GridItem>
                <GridItemContent>
                    <SvgIcon><use xlinkHref='/images/sprite.svg#man'></use></SvgIcon>
                    <TextNearImg>January 06, 2020</TextNearImg>
                </GridItemContent>
            </GridItem>
            <GridItem dataName="date">Afternoon</GridItem>
            <GridItem dataName="date">
                <GridItemContent>
                    <SvgIcon color={'transparent'}><use xlinkHref='/images/sprite.svg#clock'></use></SvgIcon>
                    <TextNearImg>15:00 - 23:00</TextNearImg>
                </GridItemContent>
            </GridItem>
            <GridItem dataName="date">8h</GridItem>
            <GridItem dataName="date">$1,630</GridItem>
            <GridItem dataName="date">30</GridItem>
        </Content>*/
        <Content className={props.isMobile ? "mobile border" : "border"}>
            {props.isMobile && <ShiftTitle titleName={props.contentTitle[0]} isMobile={props.isMobile} />}
            <GridItem className={props.isMobile ? "mobile" : ""}>
                <GridItemContent className={props.isMobile ? "mobile" : ""}>
                    <SvgIcon><use xlinkHref='/images/sprite.svg#man'></use></SvgIcon>
                    <TextNearImg>{props.date}</TextNearImg>
                </GridItemContent>
            </GridItem>
            {props.isMobile && <ShiftTitle titleName={props.contentTitle[1]} isMobile={props.isMobile} />}
            <GridItem className={props.isMobile ? "mobile" : ""}>
                {props.type}
            </GridItem>
            {props.isMobile && <ShiftTitle titleName={props.contentTitle[2]} isMobile={props.isMobile} />}
            <GridItem className={props.isMobile ? "mobile" : ""}>
                <GridItemContent className={props.isMobile ? "mobile" : ""}>
                    <SvgIcon color={'transparent'}><use xlinkHref='/images/sprite.svg#clock'></use></SvgIcon>
                    <TextNearImg>{props.period}</TextNearImg>
                </GridItemContent>
            </GridItem>
            {props.isMobile && <ShiftTitle titleName={props.contentTitle[3]} isMobile={props.isMobile} />}
            <GridItem className={props.isMobile ? "mobile" : ""}>{props.hours}</GridItem>
            {props.isMobile && <ShiftTitle titleName={props.contentTitle[4]} isMobile={props.isMobile} />}
            <GridItem className={props.isMobile ? "mobile" : ""}>{props.salary}</GridItem>
            {props.isMobile && <ShiftTitle titleName={props.contentTitle[5]} isMobile={props.isMobile} />}
            <GridItem className={props.isMobile ? "mobile" : ""}>{props.bonus}</GridItem>
        </Content>
    );
}

export default ShiftItem;
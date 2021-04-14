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
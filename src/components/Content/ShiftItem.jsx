import React from 'react';
import styled from "styled-components";
import Content from './Content';
import ShiftTitle from "./ShiftTitle";
import {IS_MOBILE} from "../../constants";

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
        <Content className={IS_MOBILE ? "mobile border" : "border"}>
            {IS_MOBILE && <ShiftTitle titleName={"Date"} />}
            <GridItem className={IS_MOBILE ? "mobile" : ""}>
                <GridItemContent className={IS_MOBILE ? "mobile" : ""}>
                    <SvgIcon><use xlinkHref='/images/sprite.svg#man' /></SvgIcon>
                    <TextNearImg>{props.date}</TextNearImg>
                </GridItemContent>
            </GridItem>
            {IS_MOBILE && <ShiftTitle titleName={"Shift type"} />}
            <GridItem className={IS_MOBILE ? "mobile" : ""}>
                {props.type}
            </GridItem>
            {IS_MOBILE && <ShiftTitle titleName={"Period"} />}
            <GridItem className={IS_MOBILE ? "mobile" : ""}>
                <GridItemContent className={IS_MOBILE ? "mobile" : ""}>
                    <SvgIcon color={'transparent'}><use xlinkHref='/images/sprite.svg#clock' /></SvgIcon>
                    <TextNearImg>{props.period}</TextNearImg>
                </GridItemContent>
            </GridItem>
            {IS_MOBILE && <ShiftTitle titleName={"Hours"} />}
            <GridItem className={IS_MOBILE ? "mobile" : ""}>{props.hours}</GridItem>
            {IS_MOBILE && <ShiftTitle titleName={"Salary (gross)"} />}
            <GridItem className={IS_MOBILE ? "mobile" : ""}>{props.salary}</GridItem>
            {IS_MOBILE && <ShiftTitle titleName={"Bonus (gross)"} />}
            <GridItem className={IS_MOBILE ? "mobile" : ""}>{props.bonus}</GridItem>
        </Content>
    );
}

export default ShiftItem;
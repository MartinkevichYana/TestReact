import React from 'react';
import styled from "styled-components";
import ShiftTitle from './ShiftTitle';
import ShiftItem from './ShiftItem';
import Content from "./Content";

const Table = styled.table`

    width: 100%;
    border-spacing: inherit;
    
    th {
        padding: 8px 18px;
        font-size: 10px;
        font-weight: 500;
        text-transform: uppercase;
        color: #8697A8;
        text-align: left;
    }
    
    td {
        padding: 18px;
        border-top: 1px solid rgba(12, 20, 39, 0.05);
        
        &:first-child {
            border-radius: 20px 0 0 20px;
        }
        
        &:last-child {
            border-radius: 0 20px 20px 0;
        }
    }
`

const SvgIcon = styled.svg`
    width: 15px;
    height: 15px;
    fill: ${props => props.color ? props.color : "#0c1427"};
`

const TdContent = styled.div`
    display: flex;
`

const TextNearImg = styled.span`
    margin-left: 10px;
`

const Tr = styled.tr`
    border: 1px solid rgba(12, 20, 39, 0.05);
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
    border-radius: 20px;
`

const GridItem = styled.div`
    padding: 18px;
    border-top: 1px solid rgba(12, 20, 39, 0.05);
    
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

const MainContent = ({isMobile, content, contentTitle}) => {

    let title = contentTitle.map( d => <ShiftTitle titleName={d} isMobile={isMobile} />);

    let shiftsElements = content.map( d =>
        <ShiftItem date={d.date} type={d.type} period={d.period} hours={d.hours} salary={d.salary} bonus={d.bonus}
            contentTitle={contentTitle} isMobile={isMobile} />);

    return (
        <div>
            {!isMobile && <Content>{title}</Content>}
            { shiftsElements }
            {/*<Table>
            <colgroup>
                <col width='20%' />
                <col width='16%' />
                <col width='18%' />
                <col width='14%' />
                <col width='18%' />
                <col width='20%' />
            </colgroup>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Shift type</th>
                    <th>Period</th>
                    <th>Hours</th>
                    <th>Salary (gross)</th>
                    <th>Bonus (gross)</th>
                </tr>
            </thead>
            <tbody>

                <Tr>
                    <td>
                        <TdContent>
                            <SvgIcon><use xlinkHref='/images/sprite.svg#man'></use></SvgIcon>
                            <TextNearImg>January 06, 2020</TextNearImg>
                        </TdContent>
                    </td>
                    <td>Afternoon</td>
                    <td>
                        <TdContent>
                            <SvgIcon color={'transparent'}><use xlinkHref='/images/sprite.svg#clock'></use></SvgIcon>
                            <TextNearImg>15:00 - 23:00</TextNearImg>
                        </TdContent>
                    </td>
                    <td>8h</td>
                    <td>$1,630</td>
                    <td>30</td>
                </Tr>
            </tbody>
        </Table>*/}
        </div>
    );
}

export default MainContent;
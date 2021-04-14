import React from 'react';
import styled from "styled-components";
import Content from './Content';

const GridTitle = styled.div`
    padding: 8px 18px;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: #8697A8;
    text-align: left;
`

const ShiftTitle = (props) => {

    return (
        <Content>
            <GridTitle>Date</GridTitle>
            <GridTitle>Shift type</GridTitle>
            <GridTitle>Period</GridTitle>
            <GridTitle>Hours</GridTitle>
            <GridTitle>Salary (gross)</GridTitle>
            <GridTitle>Bonus (gross)</GridTitle>
        </Content>
    );
}

export default ShiftTitle;
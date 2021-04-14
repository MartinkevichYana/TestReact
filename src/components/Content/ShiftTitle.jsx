import React from 'react';
import styled from "styled-components";

const GridTitle = styled.div`
    padding: 8px 18px;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: #8697A8;
    text-align: left;
    &.mobile {
        padding: 8px 0;
        width: 48%;
    }
`

const ShiftTitle = ({titleName, isMobile}) => {

    return (
        <GridTitle className={isMobile ? "mobile" : ""}>{titleName}</GridTitle>
    );
}

export default ShiftTitle;
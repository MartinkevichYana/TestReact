import React from 'react';
import styled from "styled-components";
import {IS_MOBILE} from "../../constants";

const GridTitle = styled.div`
    padding: 8px 18px;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: #8697A8;
    &.mobile {
        padding: 8px 0;
        width: 48%;
    }
`

const ShiftTitle = ({titleName}) => {

    return (
        <GridTitle className={IS_MOBILE ? "mobile" : ""}>{titleName}</GridTitle>
    );
}

export default ShiftTitle;
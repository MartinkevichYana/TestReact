import React from 'react';
import styled from "styled-components";

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

const Content =  ({className = "", children}) => {

    return (
        <GridContent className={className}>
            {children}
        </GridContent>
    );
}

export default Content;
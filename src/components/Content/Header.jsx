import React from 'react';
import styled from "styled-components";

const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const Header = (props) => {
    return (
        <Top>
            {props.children}
        </Top>
    );
}

export default Header;
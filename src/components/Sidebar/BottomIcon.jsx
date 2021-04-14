import React from 'react';
import styled from "styled-components";
import avatar from '../../images/avatar.png';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 134px;
`
const BottomIcon = () => {
    return (
        <Container>
            <img src={avatar} alt='Darlene Robertson' />
            <span>Darlene Robertson</span>
        </Container>
    );
}

export default BottomIcon;
import React from 'react';
import styled from "styled-components";
import avatar from '../../images/avatar.png';
import Button from "../Content/Button";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
const BottomIcon = ({isMobile}) => {
    return (
        <div>
            <Container>
                <img src={avatar} alt='Darlene Robertson' />
                <span>Darlene Robertson</span>
                {isMobile && <Button /> }
            </Container>
        </div>
    );
}

export default BottomIcon;
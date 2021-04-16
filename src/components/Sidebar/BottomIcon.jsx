import React from 'react';
import styled from "styled-components";
import avatar from '../../images/avatar.png';
import Button from "../Content/Button";
import {IS_MOBILE} from "../../constants";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`

const User = styled(Container)`
    max-width: 134px;
`

const BottomIcon = () => {
    return (
        <Container>
            <User>
                <img src={avatar} alt='Darlene Robertson' />
                <span>Darlene Robertson</span>
            </User>
            {IS_MOBILE && <Button /> }
        </Container>
    );
}

export default BottomIcon;
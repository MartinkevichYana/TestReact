import React from 'react';
import styled from "styled-components";
import {IS_MOBILE} from "../../constants";

const Nav = styled.nav`
    flex-grow: 1;

    &.mobile {
        order: 2;
        margin-top: 35px;
    }
`

const Item = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 14px;
    margin-bottom: 5px;
    background: ${props => props.active ? "#fff" : "transparent"};
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s all;
    
    &:hover {
        background: #fff;
    }
    &.mobile {
        background: ${props => props.active ? "#E8EAF0" : "transparent"};
        &:hover {
            background: #E8EAF0;
        }
    }
`

const SvgIcon = styled.svg`
    width: 15px;
    height: 15px;
    fill: #0C1427;
`

const ItemText = styled.span`
    margin-left: 18px;
    
    @media (max-width: 700px) {
        font-size: 12px;
    }
`

const Menu = () => {
    return (
        <Nav className={IS_MOBILE ? "mobile" : ""} >
            <Item active className={IS_MOBILE ? "mobile" : ""}>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#dashboard'></use></SvgIcon>
                <ItemText>My Dashboard</ItemText>
            </Item>
            <Item className={IS_MOBILE ? "mobile" : ""}>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#people'></use></SvgIcon>
                <ItemText>People</ItemText>
            </Item>
            <Item className={IS_MOBILE ? "mobile" : ""}>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#operations'></use></SvgIcon>
                <ItemText>Operations</ItemText>
            </Item>
            <Item className={IS_MOBILE ? "mobile" : ""}>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#planning'></use></SvgIcon>
                <ItemText>Schedule Planning</ItemText>
            </Item>
            <Item className={IS_MOBILE ? "mobile" : ""}>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#administration'></use></SvgIcon>
                <ItemText>Administration</ItemText>
            </Item>
            <Item className={IS_MOBILE ? "mobile" : ""}>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#tracking'></use></SvgIcon>
                <ItemText>Action Tracking</ItemText>
            </Item>
        </Nav>
    );
}

export default Menu;
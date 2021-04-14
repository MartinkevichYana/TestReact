import React from 'react';
import styled from "styled-components";

const Nav = styled.nav`
    flex-grow: 1;
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
`

const SvgIcon = styled.svg`
    width: 15px;
    height: 15px;
    fill: #0C1427;
`

const ItemText = styled.span`
    margin-left: 18px;
`

const Menu = () => {
    return (
        <Nav>
            <Item active>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#dashboard'></use></SvgIcon>
                <ItemText>My Dashboard</ItemText>
            </Item>
            <Item>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#people'></use></SvgIcon>
                <ItemText>People</ItemText>
            </Item>
            <Item>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#operations'></use></SvgIcon>
                <ItemText>Operations</ItemText>
            </Item>
            <Item>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#planning'></use></SvgIcon>
                <ItemText>Schedule Planning</ItemText>
            </Item>
            <Item>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#administration'></use></SvgIcon>
                <ItemText>Administration</ItemText>
            </Item>
            <Item>
                <SvgIcon><use xlinkHref='/images/sprite-sidebar.svg#tracking'></use></SvgIcon>
                <ItemText>Action Tracking</ItemText>
            </Item>
        </Nav>
    );
}

export default Menu;
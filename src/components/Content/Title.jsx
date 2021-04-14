import React from 'react';
import Select from "react-select";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import Header from './Header';
import "react-perfect-scrollbar/dist/css/styles.css";

const TitleH1 = styled.h1`
    font-weight: 700;
    font-size: 40px;
    
    @media (max-width: 1440px) {
        font-size: calc(24px + (40 - 24)*(100vw - 320px)/(1440 - 320));
    }
`

const SubTitle = styled.span`
    color: #058373;
`

const options = [
    { value: 'January', label: 'January, 2021' },
    { value: 'February', label: 'February, 2021' },
    { value: 'March', label: 'March, 2021' },
    { value: 'April', label: 'April, 2021' },
    { value: 'May', label: 'May, 2021' },
    { value: 'June', label: 'June, 2021' },
    { value: 'July', label: 'July, 2021' },
    { value: 'August', label: 'August, 2021' },
    { value: 'September', label: 'September, 2021' },
    { value: 'October', label: 'October, 2021' },
    { value: 'November', label: 'November, 2021' },
    { value: 'December', label: 'December, 2021' },
]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: '#0C1427',
        backgroundColor: state.isFocused ? '#E8EAF0' : '#fff',
        padding: 10,
    }),
    control: () => ({
        width: 165,
        display: 'flex',
        padding: '8px 13px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        border: '1px solid #DEDFE2',
        borderRadius: '6px',
        '@media (max-width: 900px)' : {
            width: 136,
            fontSize: '12px'
        }
    }),
    valueContainer: () => ({
        padding: 0
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

const DropdownIndicator = () => {
    return (
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833313 0.333344L4.99998 4.50001L9.16665 0.333344H0.833313Z" fill="#0C1427"/>
        </svg>
    );
};

const components = {
    DropdownIndicator
};

const Title = () => {
    return (
        <Header>
            <TitleH1>All worked shifts <SubTitle>January 2021</SubTitle></TitleH1>
            <Select components={components} options={options} defaultValue={options[0]} styles={customStyles} />
        </Header>
    );
}

export default Title;
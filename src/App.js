import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar/Sidebar';
import ContentMain from './components/Content/ContentMain';
import React from "react";

const Wrapper = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    color: #0C1427;
    background: #fff;
`

let initialStore = [
    {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
    {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
    {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
    {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
    {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'}
]

function App(props) {
  return (
      <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <ContentMain content={initialStore} />
      </Wrapper>
  );
}

export default App;

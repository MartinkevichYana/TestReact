import React, {useState} from "react";
import './App.css';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar/Sidebar';
import ContentMain from './components/Content/ContentMain';
import HeaderMobile from "./components/Mobile/HeaderMobile";
import {IS_MOBILE} from "./constants";

const Wrapper = styled.div`
    display: flex;
    color: #0C1427;
    background: #fff;
    &.mobile {
        flex-direction: column;
    }
`

let initialStore = {
    data: [
        {id: '1', date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {id: '2', date: 'January 07, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {id: '3', date: 'January 08, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {id: '4', date: 'January 09, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {id: '5', date: 'January 10, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {id: '6', date: 'January 11, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {id: '7', date: 'January 12, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'}
        ]
}

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(!IS_MOBILE);

  return (
      <Wrapper className={IS_MOBILE ? "mobile" : ""} >
          <GlobalStyle />
          {IS_MOBILE && <HeaderMobile handleSidebarVisibility={ () => setIsSidebarVisible(!isSidebarVisible)} isSidebarVisible={isSidebarVisible} />}
          {isSidebarVisible && <Sidebar />}
          <ContentMain content={initialStore.data} />
      </Wrapper>
  );
}

export default App;

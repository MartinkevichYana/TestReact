import React, {useState} from "react";
import './App.css';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar/Sidebar';
import ContentMain from './components/Content/ContentMain';
import HeaderMobile from "./components/Mobile/HeaderMobile";
import Content from "./components/Content/Content";

const Wrapper = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    color: #0C1427;
    background: #fff;
    
    @media (max-width: 900px) {
        flex-direction: column;
    }
`

let initialStore = {
    data: [
        {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'},
        {date: 'January 06, 2020', type: 'Afternoon', period: '15:00 - 23:00', hours: '8h', salary: '$1,630', bonus: '30'}
        ],
    title: ['Date', 'Shift type', 'Period', 'Hours', 'Salary (gross)', 'Bonus (gross)']
}

function App(props) {
    const isMobile = window.innerWidth < 900;
    const [isSidebarVisible, setIsSidebarVisible] = useState(!isMobile);

  return (
      <Wrapper>
          <GlobalStyle />
          {isMobile && <HeaderMobile handleSidebarVisibility={ () => setIsSidebarVisible(!isSidebarVisible)} isSidebarVisible={isSidebarVisible} />}
          {isSidebarVisible && <Sidebar isMobile={isMobile} />}
          <ContentMain content={initialStore.data} contentTitle={initialStore.title} isSidebarVisible={isSidebarVisible} isMobile={isMobile} />
      </Wrapper>
  );
}

export default App;

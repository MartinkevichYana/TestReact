import React from 'react';
import ShiftTitle from './ShiftTitle';
import ShiftItem from './ShiftItem';
import Content from "./Content";

const MainContent = ({isMobile, content, contentTitle}) => {

    let title = contentTitle.map( d => <ShiftTitle titleName={d} isMobile={isMobile} />);

    let shiftsElements = content.map( d =>
        <ShiftItem date={d.date} type={d.type} period={d.period} hours={d.hours} salary={d.salary} bonus={d.bonus}
            contentTitle={contentTitle} isMobile={isMobile} />);

    return (
        <div>
            {!isMobile && <Content>{title}</Content>}
            { shiftsElements }
        </div>
    );
}

export default MainContent;
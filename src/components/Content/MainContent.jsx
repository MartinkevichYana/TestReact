import React from 'react';
import ShiftTitle from './ShiftTitle';
import ShiftItem from './ShiftItem';
import Content from "./Content";
import {IS_MOBILE} from "../../constants";

const MainContent = ({content}) => {

    let shiftsElements = content.map( d =>
        <ShiftItem key={d.id} date={d.date} type={d.type} period={d.period} hours={d.hours} salary={d.salary} bonus={d.bonus} />);

    return (
        <div>
            {!IS_MOBILE && <Content>
                <ShiftTitle titleName={"Date"} />
                <ShiftTitle titleName={"Shift type"} />
                <ShiftTitle titleName={"Period"} />
                <ShiftTitle titleName={"Hours"} />
                <ShiftTitle titleName={"Salary (gross)"} />
                <ShiftTitle titleName={"Bonus (gross)"} />
            </Content>}
            { shiftsElements }
        </div>
    );
}

export default MainContent;
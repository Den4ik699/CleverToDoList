import React from "react";
import {Redirect} from "react-router-dom";
import Header from "./Header/Header";
import CalendarContainer from "./Calendar/CalendarContainer";
import TasksContainer from "./Tasks/TasksContainer";
import FooterContainer from "./Footer/FooterContainer";


const MainPage = props => {
    return (
        <div style={{width: '762px'}}>
            {/*<div>User {props.user.email}</div>*/}
            <Header signOut={props.signOut}/>
            <CalendarContainer/>
            <TasksContainer/>
            <FooterContainer/>
        </div>
    )
}

export default MainPage
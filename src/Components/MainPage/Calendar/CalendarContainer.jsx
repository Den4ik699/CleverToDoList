import React from "react";
import Calendar from "./Calendar";


const checkDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}

const generateDate = () => {
    let current = new Date()
    let days = [];
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let countOfDays = checkDaysInMonth(current.getMonth(), current.getFullYear())
    for (let i = current.getDate(); i <= countOfDays; i++) {
        days.push({
            id: `${current.getDate()}${current.getMonth()}${current.getFullYear()}`,
            dayOfWeek: weekDays[current.getDay()],
            date: current.getDate(),
            fullDate: `${current.getDate()} ${current.getMonth()} ${current.getFullYear()}`
        })
        current.setDate(current.getDate() + 1)
    }
    return days
}

const CalendarContainer = () => {
    return (
        <Calendar days={generateDate()}/>
    )
}

export default CalendarContainer
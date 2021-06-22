import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import CalendarItem from "./CalendarItem/CalendarItem";
import {useDispatch} from "react-redux";
import {setCurrentDate} from "../../../redux/Calendar/calendarActions";

const Calendar = (props) => {

    const dispatch = useDispatch();

    const changeDate = (date) => {
        dispatch(setCurrentDate(date));
    }

    return (
        <Splide
            options={{
                type: 'slide',
                rewind: true,
                height: "120px",
                trimSpace: true,
                autoWidth: true,
                pagination: false,
                arrows: false,
                gap: 20,
            }}>
            {props.days.map(day => (
                <SplideSlide key={day.id}>
                    <CalendarItem dayOfWeek={day.dayOfWeek} date={day.date}
                                  changeDate={changeDate} fullDate={day.fullDate}/>
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default Calendar
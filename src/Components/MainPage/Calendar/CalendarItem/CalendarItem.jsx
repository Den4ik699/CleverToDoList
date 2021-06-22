import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import s from './CalendarItem.module.css';


const useStyles = makeStyles({
    root: {
        minWidth: 90,
        minHeight: 100,
        textAlign: "center",
        margin: '5px 0 0 5px',
        borderRadius: 25
    },
    today: {
        backgroundColor: "black",
        color: "white"
    },
    title: {
        fontWeight: "lighter",
    },
});
const CalendarItem = (props) => {
    const classes = useStyles();
    let todayClass;
    let currentDate = new Date();
    if (currentDate.getDate() === props.date)
        todayClass = classes.today;


    const handleClick = () => {
        props.changeDate(props.fullDate)
    }

    return (
        <Card onClick={handleClick} className={`${classes.root} ${todayClass} ${s.hoverDays}`}>
            <CardContent>
                <Typography variant="h6" className={classes.title} gutterBottom>
                    {props.dayOfWeek}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.date}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CalendarItem
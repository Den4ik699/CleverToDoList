import React from "react";
import TaskItem from "./TaskItem";
import {useSelector} from "react-redux";



const TaskItemContainer = ({task,status, handleCompleteTask = () => {},handleClickOpen = () => {}}) => {
    const data = useSelector(state => state.taskData.tasks)
    return (
        <TaskItem task = {task} handleClickOpen={handleClickOpen}/>
    )
}

export default TaskItemContainer;
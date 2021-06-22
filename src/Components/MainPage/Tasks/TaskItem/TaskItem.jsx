import React from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import DescriptionOfTask from "./DescriptionOfTask/DescriptionOfTask";
import DescriptionOfTaskContainer from "./DescriptionOfTask/DescriptionOfTaskContainer";

const TaskItem = (props) => {
    const handleClickOpen = () => {
        props.handleClickOpen(props.task)
        //props.handleCompleteTask(props.status)
    }

    return (
        <div style={{marginLeft: 10 + 'px'}}>
            <FormControlLabel checked={props.task.status}
                              control={<Checkbox/>}
                              label={props.task.title}
                              onClick={handleClickOpen}/>
        </div>
    )
}
export default TaskItem
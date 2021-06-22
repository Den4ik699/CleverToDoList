import React, {useEffect, useState} from "react";
import TaskItemContainer from "./TaskItem/TaskItemContainer";
import {useSelector} from "react-redux";
import DescriptionOfTaskContainer from "./TaskItem/DescriptionOfTask/DescriptionOfTaskContainer";
import {setTask} from "../../../redux/tasksData/taskDataActions";

const Tasks = (props) => {
    const data = useSelector(state => state.taskData.tasks)

  const [task, setTask] = useState({});

    //const [status, setStatus] = useState({})

    //console.log(data[1])

    const [open, setOpen] = useState(false);

    const handleClickOpen = (task) => {
        setTask(task);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const handleCompleteTask = (status) => {
    //     console.log('function')
    //     if (!status)
    //         setStatus(status)
    //     else setStatus(!status)
    //     console.log(status)
    // }

    return (
        <div style={{overflow: "scroll", height: '300px', overflowX: 'hidden', marginTop: '40px'}}>
            {data.map((task) => {
                return <TaskItemContainer key={task.id} task={task}
                                          handleClickOpen={handleClickOpen}/>
            })}

            <DescriptionOfTaskContainer
                handleClose={handleClose} open={open}
                task={task}/>
        </div>

    )
}


export default Tasks

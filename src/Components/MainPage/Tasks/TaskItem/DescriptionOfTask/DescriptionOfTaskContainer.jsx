import React, {useState} from "react";
import DescriptionOfTask from "./DescriptionOfTask";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from "../../../../../redux/tasksData/taskDataActions";

const DescriptionOfTaskContainer = (props) => {

    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };


    const date = useSelector(state => state.calendar.currentDate)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTask(date, props.task.id))
        console.log(props.task.id)
    }

    const data = useSelector(state => state.taskData.tasks)
    //console.log(data);

    return (
        <DescriptionOfTask
            openEdit = {openEdit}
            handleCloseEdit = {handleCloseEdit}
            handleClickOpenEdit = {handleClickOpenEdit}
            task={props.task}
            open={props.open}
            handleClose={props.handleClose}
            handleDelete={handleDelete}/>
    )
}

export default DescriptionOfTaskContainer
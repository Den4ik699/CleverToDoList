import React, {useState} from "react";
import EditForm from "./EditForm";
import {connect, useDispatch} from "react-redux";
import {editDescription, editTask, editTitle} from "../../../../../../redux/tasksData/taskDataActions";


const EditFormContainer = (props) => {

    const dispatch = useDispatch()

    const editTaskItem = (title, description) => {
        dispatch(editTask(title, description, props.date, props.task.id))
    }

    const onChangeTitle = (event) => {
        props.editTitle(event.target.value)
    }

    const onChangeDescription = (event) => {
        props.editDescription(event.target.value)
    }

    return (
        <EditForm title={props.title} description={props.description} editTask={editTaskItem}
                  onChangeTitle={onChangeTitle} onChangeDescription={onChangeDescription} openEdit={props.openEdit}
                  handleCloseEdit={props.handleCloseEdit}/>
    )
}

const mapDispatchToProps =
{
    // editTask,
        editTitle,
        editDescription,
}

const mapStateToProps = (state) => {
    return {
        title: state.taskData.title,
        description: state.taskData.description,
        date: state.calendar.currentDate
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditFormContainer)
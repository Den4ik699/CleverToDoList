import React from "react";
import Footer from "./Footer";
import {connect} from "react-redux";
import {setDescription, setTask, setTitle} from "../../../redux/tasksData/taskDataActions";

const FooterContainer = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangeTitle = (event) => {
        props.setTitle(event.target.value)
    }

    const onChangeDescription = (event) => {
        props.setDescription(event.target.value)
    }

    const createTask = (title, description) => {
        props.setTask(title, description, props.date)
    }

    return (
        <Footer
            title={props.title}
            description={props.description}
            onChangeTitle={onChangeTitle}
            onChangeDescription={onChangeDescription}
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            createTask={createTask}
        />
    )
}


const mapStateToProps = state => {
    return {
        title: state.taskData.title,
        description: state.taskData.description,
        date: state.calendar.currentDate
    }
}

const mapDispatchToProps =
    {
        setTask,
        setTitle,
        setDescription,
    }


export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);


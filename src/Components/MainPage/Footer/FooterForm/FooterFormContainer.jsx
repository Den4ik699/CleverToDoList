import React from "react";
import FooterForm from "./FooterForm";

const FooterFormContainer = (props) => {
    return (
        <FooterForm
            createTask = {props.createTask}
            open={props.open}
            handleClickOpen={props.handleClickOpen}
            handleClose={props.handleClose}
            title={props.title}
            description={props.description}
            onChangeTitle = {props.onChangeTitle}
            onChangeDescription = {props.onChangeDescription}/>
    )
}


export default FooterFormContainer
import React from "react";
import {Button} from "@material-ui/core";
import s from './Footer.module.css';
import FooterFormContainer from "./FooterForm/FooterFormContainer";


const Footer = (props) => {

    return (
        <footer className={s.footer}>
            <Button
                onClick={props.handleClickOpen}
                variant="contained"
                color="secondary">
                + Add a new task</Button>
            <FooterFormContainer
                createTask = {props.createTask}
                open={props.open}
                handleClose={props.handleClose}
                title={props.title}
                description={props.description}
                onChangeTitle = {props.onChangeTitle}
                onChangeDescription = {props.onChangeDescription}/>
        </footer>
    )
}

export default Footer
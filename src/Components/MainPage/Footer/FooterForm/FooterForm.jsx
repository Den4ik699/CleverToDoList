import React from "react";
import Button from "@material-ui/core/Button";
import {Dialog, TextareaAutosize, TextField} from "@material-ui/core";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';


export default function FooterForm(props) {

    const handleCreateTask = () => {
        props.handleClose()
        props.createTask(props.title, props.description)
    }
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input some task
                    </DialogContentText>
                    <TextField
                        onChange={props.onChangeTitle}
                        autoFocus
                        margin="dense"
                        id="Title of task"
                        type="email"
                        fullWidth
                    />
                    <DialogContentText>
                        Input description of task
                    </DialogContentText>
                    <TextareaAutosize
                        onChange={props.onChangeDescription}
                        aria-label="empty textarea"
                        style={{
                            resize: 'none', width: '400px', height: '100px',
                            fontSize: '17px', fontFamily: 'Roboto'
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        props.handleClose()
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button
                    //     onClick={() => {
                    //     props.handleClose()
                    //     props.createTask(props.title, props.description, `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`)
                    // }}
                        onClick={handleCreateTask}
                        color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
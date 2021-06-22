import React from "react";
import Button from "@material-ui/core/Button";
import {Dialog, TextareaAutosize, TextField} from "@material-ui/core";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';


export default function EditForm(props) {

    return (
        <div>
            <Dialog open={props.openEdit} onClose={props.handleCloseEdit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input a title of task
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
                        props.handleCloseEdit()
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            props.handleCloseEdit()
                            props.editTask(props.title, props.description)
                        }}
                        color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
import React, {useEffect} from 'react'
import {Dialog, TextareaAutosize} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import s from './DescriptionOfTask.module.css'
import ShareIcon from '@material-ui/icons/Share';
import FooterFormContainer from "../../../Footer/FooterForm/FooterFormContainer";
import FooterForm from "../../../Footer/FooterForm/FooterForm";
import EditForm from "./EditForm/EditForm";
import EditFormContainer from "./EditForm/EditFormContainer";

const DescriptionOfTask = (props) => {
    return (
        <div style={{width: 300}}>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Today`s Tasks</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{height: 100, width: 100}}>
                        {props.task.title}
                    </DialogContentText>
                    <DialogContentText>
                        Task Description:
                    </DialogContentText>

                    <DialogContentText style={{height: 500, width: 500}}>
                        {props.task.description}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <div className={s.controlBtn}>
                        <div className={s.controlBtn__Item}>
                            <DeleteIcon className={s.deleteBtn} onClick={() => {
                                props.handleDelete()
                                props.handleClose()
                            }}/>
                        </div>
                        <div className={s.controlBtn__Item}>
                            <EditIcon onClick={props.handleClickOpenEdit} className={s.editBtn}/>
                            <EditFormContainer task={props.task} openEdit={props.openEdit} handleCloseEdit={props.handleCloseEdit}/>
                        </div>
                        <div className={s.controlBtn__Item}>
                            <ShareIcon className={s.shareBtn}/>
                        </div>
                    </div>

                    <Button onClick={() => {
                        props.handleClose()
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button style={{backgroundColor: '#13b163', color: 'white'}}
                            onClick={() => {
                                props.handleClose()
                                // props.handleCompleteTask(props.task.status)
                                // console.log('alo' + props.task.status)
                            }}>
                        Completed
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DescriptionOfTask;
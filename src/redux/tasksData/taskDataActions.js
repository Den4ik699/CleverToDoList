import {firebaseApp} from "../../base";
import {useState} from "react";

export const TASK_DATA_CREATE = 'TASK_DATA_CREATE',
    TASK_DATA_READ = 'TASK_DATA_READ',
    TASK_DATA_UPDATE = 'TASK_DATA_UPDATE',
    TASK_DATA_DELETE = 'TASK_DATA_READ',
    TASK_DATA_ADD_TITLE = 'TASK_DATA_ADD_TITLE',
    TASK_DATA_ADD_DESCRIPTION = 'TASK_DATA_ADD_DESCRIPTION',
    TASK_DATA_EDIT_TITLE = 'TASK_DATA_EDIT_TITLE',
    TASK_DATA_EDIT_DESCRIPTION = 'TASK_DATA_EDIT_DESCRIPTION',
    TASK_DATA_EDIT_STATUS = 'TASK_DATA_EDIT_STATUS'

export const setTask = (title, description, date) => {
    return dispatch => {
        const taskItem = {
            title,
            description,
            status: false
        }

        const data = firebaseApp.database().ref(`${date}/Tasks`);

        data.push(taskItem)
            .then(() => {
                return data.once('value')
            })
            .then((snapshot) => {
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
                //console.log(tasks)
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const getTask = (date) => {
    // console.log(date)
    return dispatch => {
        const data = firebaseApp.database().ref(`${date}/Tasks`);
        data.once('value')
            .then((snapshot) => {
                //console.log(snapshot.val())
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_READ,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export const deleteTask = (date, id) => {
    return dispatch => {
        const data = firebaseApp.database().ref(`${date}/Tasks/${id}`);
        data.remove()
            .then(() => {
                return firebaseApp.database().ref(`${date}/Tasks/`).once('value');
            })
            .then((snapshot) => {
                console.log(snapshot.val())
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export const editTask = (title, description, date, id) => {
    return dispatch => {
        const taskItem = {
            title,
            description,
            status: false
        }
        const data = firebaseApp.database().ref(`${date}/Tasks/${id}`);
        data.update(taskItem)
            .then(() => {
                return firebaseApp.database().ref(`${date}/Tasks/`).once('value');
            })
            .then((snapshot) => {
                console.log(snapshot.val())
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export const editTitle = (title) => {
    return {
        type: TASK_DATA_EDIT_TITLE,
        payload: title
    }
}

export const editDescription = (description) => {
    return {
        type: TASK_DATA_EDIT_DESCRIPTION,
        payload: description
    }
}

export const editStatus = (status) => {
    return {
        type: TASK_DATA_EDIT_STATUS,
        payload: status
    }
}


export const setTitle = (title) => {
    return {
        type: TASK_DATA_ADD_TITLE,
        payload: title
    }
}

export const setDescription = (description) => {
    return {
        type: TASK_DATA_ADD_DESCRIPTION,
        payload: description
    }
}
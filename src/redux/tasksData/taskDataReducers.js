import {
    TASK_DATA_CREATE,
    TASK_DATA_READ,
    TASK_DATA_UPDATE,
    TASK_DATA_DELETE,
    TASK_DATA_ADD_DESCRIPTION,
    TASK_DATA_ADD_TITLE, TASK_DATA_EDIT_TITLE, TASK_DATA_EDIT_DESCRIPTION, TASK_DATA_EDIT_STATUS
} from "./taskDataActions";

const defaultState = {
    tasks: [],
    title: '',
    description: ''
}

export const taskDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TASK_DATA_CREATE:
            return {
                ...state,
                tasks: action.payload
            };

        case TASK_DATA_READ:
            return {
                ...state,
                tasks: action.payload
            };
        case TASK_DATA_DELETE:
            return {
                ...state,
                tasks: action.payload
            }

        case TASK_DATA_UPDATE:
            return {
                ...state,
                tasks: action.payload
            };
        //
        // case TASK_DATA_DELETE: {
        //     return {
        //         ...state,
        //         user: action.payload,
        //         isSignedIn: true
        //     }
        // }

        case TASK_DATA_ADD_TITLE: {
            return {
                ...state,
                title: action.payload
            }
        }

        case TASK_DATA_ADD_DESCRIPTION: {
            return {
                ...state,
                description: action.payload
            }
        }

        case TASK_DATA_EDIT_TITLE: {
            return {
                ...state,
                title: action.payload
            }
        }

        case TASK_DATA_EDIT_DESCRIPTION: {
            return {
                ...state,
                description: action.payload
            }
        }

        case TASK_DATA_EDIT_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state;
    }
}
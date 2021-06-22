import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {taskDataReducer} from "./tasksData/taskDataReducers";
import {calendarReducers} from "./Calendar/calendarReducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    taskData: taskDataReducer,
    calendar: calendarReducers
})
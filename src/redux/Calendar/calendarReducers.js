import {CHANGE_CURRENT_DATE} from "./calendarActions";

const initialState = {
    currentDate: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`
}

export const calendarReducers = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_DATE: {
            return {
                ...state,
                currentDate: action.payload
            };
        }
        default:
            return state;
    }
}
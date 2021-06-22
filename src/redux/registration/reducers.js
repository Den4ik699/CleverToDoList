import {
    REGISTRATION_SET_IS_SIGNED_IN,
    REGISTRATION,
    REGISTRATION_CHANGE_PASSWORD_TEXT,
    REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    REGISTRATION_CHANGE_EMAIL_TEXT, REGISTRATION_SET_IS_CORRECT_PASSWORD
} from './actions'

const defaultState = {
    email: '',
    password: '',
    repeatPassword: '',
    user: {},
    isSignedIn: false,
    isCorrect: true,
    incorrectMessage: ''
}

export const registrationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            };

        case REGISTRATION_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };

        case REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT:
            return {
                ...state,
                repeatPassword: action.payload
            };

        case REGISTRATION: {
            return {
                ...state,
                user: action.payload,
                isSignedIn: true
            }
        }

        case REGISTRATION_SET_IS_CORRECT_PASSWORD: {
            const {password, repeatPassword} = action.payload
            if (password === repeatPassword) {
                return {
                    ...state,
                    isCorrect: true,
                    incorrectMessage: ''
                }
            }

            else return {
                ...state,
                isCorrect: false,
                incorrectMessage: 'Incorrect Repeat Password'
            }
        }

        case REGISTRATION_SET_IS_SIGNED_IN: {
            return {
                ...state,
                isSignedIn: action.payload
            }
        }
        default:
            return state;
    }
}
import {firebaseApp} from "../../base";

export const REGISTRATION_CHANGE_EMAIL_TEXT = "REGISTRATION_CHANGE_EMAIL_TEXT"
export const REGISTRATION_CHANGE_PASSWORD_TEXT = "REGISTRATION_CHANGE_PASSWORD_TEXT"
export const REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT = "REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT"
export const REGISTRATION_SET_IS_SIGNED_IN = 'REGISTRATION_SET_IS_SIGNED_IN';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SET_IS_CORRECT_PASSWORD = 'REGISTRATION_SET_IS_CORRECT_PASSWORD';

export const setEmailText = email => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
})

export const setPasswordText = password => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password
})

export const setRepeatPasswordText = repeatPassword => ({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: repeatPassword
})

export const setIsSignedIn = isSignedIn => ({
    type: REGISTRATION_SET_IS_SIGNED_IN,
    payload: isSignedIn
})

export const setIsCorrect = (password, repeatPassword) => ({
    type: REGISTRATION_SET_IS_CORRECT_PASSWORD,
    payload: {
        password,
        repeatPassword
    }
})

export const setUser = (email, password, repeatPassword) => {
    return dispatch => {

        if (password !== repeatPassword) {
            console.log('Incorrect password')
        } else {
            console.log('SigningUp...');
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                .then((u) => {
                    console.log('Successfully Signed Up');
                    console.log(u.user);
                    dispatch({
                        type: REGISTRATION,
                        payload: u.user
                    })
                    dispatch({
                        type: REGISTRATION_CHANGE_EMAIL_TEXT,
                        payload: ''
                    })
                    dispatch({
                        type: REGISTRATION_CHANGE_PASSWORD_TEXT,
                        payload: ''
                    })
                    dispatch({
                        type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
                        payload: ''
                    })
                })
                .catch((err) => {
                    console.log(err.toString());
                })
        }
    }
};
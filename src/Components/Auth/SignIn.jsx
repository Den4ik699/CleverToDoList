import React from 'react';
import LoginContainer from "./LoginContainer";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'

const SignIn = (props) => {

    // authenticate = () => {
    //     const authProvider = new firebase.auth['GoogleAuthProvider']();
    //     firebaseApp
    //         .auth()
    //         .signInWithPopup(authProvider)
    //         .then(this.authHandler)
    //         .catch(() => console.log('Что-то пошло не так'));
    // }


    return (
        props.isSignedIn ? (<Redirect to='/main'/>) : (<LoginContainer/>)
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps)(SignIn);
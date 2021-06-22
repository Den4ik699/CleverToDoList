import {Redirect} from "react-router-dom";
import React from "react";
import RegistrationContainer from "./RegistrationContainer";
import {connect} from "react-redux";

const SignUp = (props) => {

    return (
        props.isSignedIn ? (<Redirect to='/main'/>) : (<RegistrationContainer/>)
    )
}
const mapStateToProps = state => {
    return {
        user: state.registration.user,
        isSignedIn: state.registration.isSignedIn
    }
}

export default connect(mapStateToProps)(SignUp);
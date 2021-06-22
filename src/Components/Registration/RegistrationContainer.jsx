import React from 'react';
import {
    setEmailText,
    setPasswordText,
    setRepeatPasswordText,
    setUser, setIsCorrect
} from '../../redux/registration/actions'
import {connect} from 'react-redux';
import Registration from "./Registration";

class RegistrationContainer extends React.Component {

    render() {
        return (
            <Registration
                email={this.props.email}
                password={this.props.password}
                repeatPassword={this.props.repeatPassword}
                setEmail={this.props.setEmailText}
                setPassword={this.props.setPasswordText}
                setRepeatPassword={this.props.setRepeatPasswordText}
                setUser={this.props.setUser}
                setIsCorrect={this.props.setIsCorrect}
                incorrectMessage={this.props.incorrectMessage}
                isCorrect={this.props.isCorrect}
            />
        )
    }
}

const mapStateToProvider = state => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword,
        user: state.registration.user,
        incorrectMessage: state.registration.incorrectMessage,
        isCorrect: state.registration.isCorrect
    }
}

const mapDispatchToProps = {
    setEmailText,
    setPasswordText,
    setRepeatPasswordText,
    setUser,
    setIsCorrect
}

export default connect(mapStateToProvider, mapDispatchToProps)(RegistrationContainer);
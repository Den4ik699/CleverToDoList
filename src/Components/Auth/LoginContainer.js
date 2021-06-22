import React from 'react';
import Login from './Login';
import {setEmail, setPassword, setUser} from '../../redux/auth/actions'
import {connect} from 'react-redux';
import {ToastProvider} from "react-toast-notifications";

class LoginContainer extends React.Component {

    render() {
        return (
            <ToastProvider>
                <Login
                    email={this.props.email}
                    password={this.props.password}
                    setEmail={this.props.setEmail}
                    setPassword={this.props.setPassword}
                    setUser={this.props.setUser}
                    error={this.props.error}
                />
            </ToastProvider>

        )
    }
}

const mapStateToProvider = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error
    }
}
const mapDispatchToProps = {
    setEmail,
    setPassword,
    setUser
}

export default connect(mapStateToProvider, mapDispatchToProps)(LoginContainer);
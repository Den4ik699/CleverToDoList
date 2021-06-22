import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {NavLink} from "react-router-dom";
import {ToastProvider, useToasts} from 'react-toast-notifications'


const Login = (props) => {
    const {addToast} = useToasts()

    const onChangeEmail = (event) => {
        props.setEmail(event.target.value)
        console.log(props);
    }

    const onChangePassword = (event) => {
        props.setPassword(event.target.value)
        console.log(props);
    }

    return (
        <>
            <form className="entryForm">
                <Grid container direction="column" spacing={1} alignItems="center">
                    <Grid item>
                        <TextField
                            value={props.email}
                            onChange={onChangeEmail}
                            type="text"
                            label="Enter email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={props.password}
                            onChange={onChangePassword}
                            type="password"
                            label="Enter password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item>
                        {/*<ToastProvider*/}

                        <Button style={{marginRight: "20px"}}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    if (props.error.isError) {
                                        addToast(props.error.errorMessage, {
                                            appearance: 'error',
                                            autoDismiss: true,
                                        })
                                    }
                                    props.setUser(props.email, props.password)
                                }}>
                            Login
                        </Button>

                        <NavLink to='/signUp' style={{textDecoration: 'none'}}>
                            <Button
                                variant="contained"
                                color="primary">
                                Sign up
                            </Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </form>
        </>


    )
}

export default Login;
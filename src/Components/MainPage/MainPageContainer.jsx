import React, {useEffect} from 'react'
import {setUser, setIsSignedIn} from '../../redux/auth/actions'
import {setIsSignedIn as setIsSignedInReg} from '../../redux/registration/actions'

import {connect, useSelector} from 'react-redux';
import firebase from 'firebase/app';
import {useAuthState} from 'react-firebase-hooks/auth'
import MainPage from "./MainPage";
import {Redirect} from "react-router-dom";
import {getTask, setTask} from "../../redux/tasksData/taskDataActions";
import {setCurrentDate} from "../../redux/Calendar/calendarActions";
const MainPageContainer = props => {
    // const history = useHistory()

    const date = useSelector(state => state.calendar.currentDate)
    // const state = useSelector(state => state)
    // console.log(date)
    const signOut = () => {
        firebase.auth().signOut();
        props.setIsSignedInReg(false)
        // history.push('/signIn')
    }


    useEffect(() => {
        // console.log(date)
        props.setCurrentDate(date)
        props.getTask(date)
    }, [date]);


    const checkingAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                props.setIsSignedIn(true)
            } else {
                props.setIsSignedIn(false)
            }
        })
    }

    useEffect(checkingAuth, [checkingAuth])

    const [, loading] = useAuthState(firebase.auth())

    if (loading) {
        return <div>Loading</div>
    }
    return (
        props.isSignedIn ? (
            <MainPage
                user={props.user}
                isSignedIn={props.isSignedIn}
                setUser={props.setUser}
                setIsSignedIn={props.setIsSignedIn}
                signOut={signOut}
            />
        ) : (
            <Redirect to='/signIn'/>
        )
    )
}

const mapStateToProvider = state => {
    return {
        user: state.auth.user,
        isSignedIn: state.auth.isSignedIn,
        tasks: state.taskData.tasks
    }
}

const mapDispatchToProps = {
    setUser,
    setIsSignedIn,
    setIsSignedInReg,
    setTask,
    getTask,
    setCurrentDate
}


export default connect(mapStateToProvider, mapDispatchToProps)(MainPageContainer);
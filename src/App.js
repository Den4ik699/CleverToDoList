import './App.css';
import SignIn from "./Components/Auth/SignIn";
import {BrowserRouter, Route} from "react-router-dom";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {createStore} from "redux";
import rootReducer from './redux/reducers'
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import MainPageContainer from "./Components/MainPage/MainPageContainer";
import SignUp from "./Components/Registration/SignUp";
import {useEffect} from "react";


const NewComp = () => {
    // const location = useLocation()
    // const history = useHistory()
    //
    // useEffect(() => {
    //     if (location.path === '/' && isSignedIn) {
    //         history.push()
    //     }
    // }, [location])
    return (
        <div className="wrapper">
            <Route path='/main' render={() => (
                <MainPageContainer/>
            )}/>
            <Route path='/signUp' render={() => (
                <SignUp/>
            )}/>
            <Route path='/signIn' render={() => (
                <SignIn/>
            )}/>
        </div>
    )
}

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                {/*<NewComp />*/}
                <div className="wrapper">
                    <Route path='/main' render={() => (
                        <MainPageContainer/>
                    )}/>
                    <Route path='/signUp' render={() => (
                        <SignUp/>
                    )}/>
                    <Route path='/signIn' render={() => (
                        <SignIn/>
                    )}/>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;

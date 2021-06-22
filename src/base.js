import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const env = process.env

const firebaseApp = firebase.initializeApp(
    {
        apiKey: env.REACT_APP_API_KEY,
        authDomain: env.REACT_APP_AUTH_DOMAIN,
        databaseURL: env.REACT_APP_DATABASE_URL,
        projectId: env.REACT_APP_PROJECT_ID,
        storageBucket: env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: env.REACT_APP_MESSAGENG_SENDER_ID,
        appId: env.REACT_APP_APP_ID,
        measurementId: env.REACT_APP_MEASURMENT_ID
    })

export {firebaseApp}
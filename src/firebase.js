import firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';
import {googleApiKey} from './key.js';

var firebaseConfig = {
    apiKey: googleApiKey(),
    authDomain: "meal-planner-1336c.firebaseapp.com",
    databaseURL: "https://meal-planner-1336c.firebaseio.com",
    projectId: "meal-planner-1336c",
    storageBucket: "meal-planner-1336c.appspot.com",
    messagingSenderId: "237619101623",
    appId: "1:237619101623:web:8be149e03421a900ecf232",
    measurementId: "G-4FB606BBNZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();

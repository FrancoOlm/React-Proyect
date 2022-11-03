import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDkjA_D8DCUa56uJ-vszftY_QOvE5bzRZ0",
    authDomain: "react-budgietech.firebaseapp.com",
    projectId: "react-budgietech",
    storageBucket: "react-budgietech.appspot.com",
    messagingSenderId: "260997238037",
    appId: "1:260997238037:web:2ba94625b4ea46d5f4ad1c"
};
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyB7LB81tbtUAH_2avIdbJbpmUyClG-iUqA",
    authDomain: "vue-tutorial-f47e2.firebaseapp.com",
    databaseURL: "https://vue-tutorial-f47e2.firebaseio.com",
    projectId: "vue-tutorial-f47e2",
    storageBucket: "vue-tutorial-f47e2.appspot.com",
    messagingSenderId: "284737411030",
    appId: "1:284737411030:web:1848833b9c7d59e8be7677"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref('chats')

export default firebase;
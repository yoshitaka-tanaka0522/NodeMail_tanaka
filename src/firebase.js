import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBtg-5S1U1WuUJQDSPILNHLpVE7zueq3d4",
    authDomain: "send-mail-demo.firebaseapp.com",
    databaseURL: "newlifesakaeproject.firebaseapp.com",
    projectId: "newlifesakaeproject",
    storageBucket: "send-mail-demo.appspot.com",
    messagingSenderId: "756179565704"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
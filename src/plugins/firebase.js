import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBtg-5S1U1WuUJQDSPILNHLpVE7zueq3d4",
  authDomain: "newlifesakaeproject.firebaseapp.com",
  databaseURL: "newlifesakaeproject.firebaseapp.com",
  projectId: "newlifesakaeproject",
  storageBucket: "xxxxxx.appspot.com",
  messagingSenderId: "xxxxxx"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
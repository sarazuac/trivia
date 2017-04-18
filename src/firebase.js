import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBSa6EQhWHO7sKOTHZfB0TOJ0ppy1ftwok",
    authDomain: "trivia-6b18f.firebaseapp.com",
    databaseURL: "https://trivia-6b18f.firebaseio.com",
    projectId: "trivia-6b18f",
    storageBucket: "trivia-6b18f.appspot.com",
    messagingSenderId: "60081437889"
  };




export const firebaseApp = firebase.initializeApp(config);


export const questRef = firebase.database().ref('questions');
export const scoreRef = firebase.database().ref('scores');

import * as firebase from 'firebase';



  var config = {
    apiKey: "AIzaSyBmD3YxYRFyzqsuobRTebY0G4icMrY2Fjo",
    authDomain: "shortlinebusapp.firebaseapp.com",
    databaseURL: "https://shortlinebusapp.firebaseio.com",
    projectId: "shortlinebusapp",
    storageBucket: "shortlinebusapp.appspot.com",
    messagingSenderId: "393164937668"
  };
   firebase.initializeApp(config);
 
  firebase.database().ref().set({
name: 'Ricky Raghavan'

  });
const database=firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

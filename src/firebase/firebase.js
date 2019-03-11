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
name: 'Ricky Raghavan',
cities:[
  'Mahwah',
  'New York City'
],
startimes:[
'4:47','5:28','5:50','6:08','6:20','6:39','6:54','7:03','7:13','7:22','7:33','7:48','7:58','8:21','8:38','9:03','9:34','10:18','11:18','12:04p','12:37p','1:04p','1:34p','2:04p','2:42p','3:04p','4:04p','5:04p','6:04p','7:04p','8:03p','9:02p','10:03p','11:02p'
]

  });
const database=firebase.database();

database.ref('startimes').once('value').then((snapshot)=>{
  const val=snapshot.val();
  console.log(val);
})
.catch((e)=>{
  console.log('Error fetching data',e);
})

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

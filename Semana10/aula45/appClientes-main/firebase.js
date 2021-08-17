import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2mEx3KqpIkrzjyrTM8Ew6bt1X3Q-5iDQ",
  authDomain: "first1-269c9.firebaseapp.com",
  projectId: "first1-269c9",
  storageBucket: "first1-269c9.appspot.com",
  messagingSenderId: "409085241264",
  appId: "1:409085241264:web:9296a99c462f5fb5cd1875"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

  const db = firebase.firestore()
  export default{
    db, firebase, auth
  }





// var firebaseConfig = {
//     apiKey: "AIzaSyAsGlc6KQz_20zWdo5YXhPpkw_x958lyEw",
//     authDomain: "motoapp-da5f9.firebaseapp.com",
//     projectId: "motoapp-da5f9",
//     storageBucket: "motoapp-da5f9.appspot.com",
//     messagingSenderId: "95280987880",
//     appId: "1:95280987880:web:5b3852376651e58cea135d"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   const auth = firebase.auth();

//   const db = firebase.firestore()
//   export default{
//     db, firebase, auth
//   }
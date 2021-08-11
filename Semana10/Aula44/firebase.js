import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB8M9FyEMCx4WoUjWILtcZjHAOsT19pFnA",
    authDomain: "soulcode-47990.firebaseapp.com",
    projectId: "soulcode-47990",
    storageBucket: "soulcode-47990.appspot.com",
    messagingSenderId: "676331550250",
    appId: "1:676331550250:web:60df40dc69e95d88dd3553",
    measurementId: "G-BCZCY7B05E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //porta de entrada para a base de dados do projeto();
  const db = firebase.firestore  

  //porta de entrada para o sistema de autenticação do firebase
  const auth = firebase.auth();  

  export default {
      db, firebase, auth
  }
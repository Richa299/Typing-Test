import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDD5OGZUryTyq0jHeX6OYWrcwtknq741CQ",
    authDomain: "typing-website-ce012.firebaseapp.com",
    projectId: "typing-website-ce012",
    storageBucket: "typing-website-ce012.appspot.com",
    messagingSenderId: "707109847526",
    appId: "1:707109847526:web:066a612a8b1d03d9609627",
    measurementId: "G-BEY9DCBEHS"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db}
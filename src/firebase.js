import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC4ApsiSt4jC4W13xuW3aV-HoMQq8GP_mM",
  authDomain: "travis-ourspace.firebaseapp.com",
  databaseURL: "https://travis-ourspace.firebaseio.com",
  projectId: "travis-ourspace",
  storageBucket: "travis-ourspace.appspot.com",
  messagingSenderId: "265561486250",
  appId: "1:265561486250:web:28e5cfe6841598c64831d3",
  measurementId: "G-8X6T2J9DPR"
};

  firebase.initializeApp(firebaseConfig);
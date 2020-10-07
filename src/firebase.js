import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCruUzWCI-G2dipwV7QzdNlA_ZS8NpgDfg",
  authDomain: "whatsapp-clone-43b56.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-43b56.firebaseio.com",
  projectId: "whatsapp-clone-43b56",
  storageBucket: "whatsapp-clone-43b56.appspot.com",
  messagingSenderId: "255253835550",
  appId: "1:255253835550:web:597a2362be0b2f2163a30f",
  measurementId: "G-T9JZ3K4NKJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

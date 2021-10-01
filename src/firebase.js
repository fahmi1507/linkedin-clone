import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWURlLIIB0lP-6s8O_iJZ3J-tGBSxQHoM",
  authDomain: "linkedin-clone-31072.firebaseapp.com",
  projectId: "linkedin-clone-31072",
  storageBucket: "linkedin-clone-31072.appspot.com",
  messagingSenderId: "1015685219904",
  appId: "1:1015685219904:web:5d58ce1e1757bfcbbf41a5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs,deleteDoc,updateDoc,doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDVug0kqrnma9qw9gSQfd67BJ8hkl1NU1Y",
    authDomain: "boilerplate-8ec59.firebaseapp.com",
    projectId: "boilerplate-8ec59",
    storageBucket: "boilerplate-8ec59.appspot.com",
    messagingSenderId: "262339647061",
    appId: "1:262339647061:web:1e484cdcb18fb827dce6dc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Auth
const auth = getAuth();

// Initialize firestore
const db = getFirestore(app);

console.log(app)

export{
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc
}
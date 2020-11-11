import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAEHtBSVaym9VpEpNnspyF60Z7TGznuT1A",
    authDomain: "discord-clone-2854d.firebaseapp.com",
    databaseURL: "https://discord-clone-2854d.firebaseio.com",
    projectId: "discord-clone-2854d",
    storageBucket: "discord-clone-2854d.appspot.com",
    messagingSenderId: "390707261136",
    appId: "1:390707261136:web:a434fc7e20d3a1070c78d5",
    measurementId: "G-RH67MNRW2N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();



export { auth,provider };
export default db;
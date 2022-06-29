
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsqQ_mxhYPAORS7DFBU5Z106eY0lQP2Oo",
    authDomain: "muso-ninjas-1f76d.firebaseapp.com",
    projectId: "muso-ninjas-1f76d",
    storageBucket: "muso-ninjas-1f76d.appspot.com",
    messagingSenderId: "589370555916",
    appId: "1:589370555916:web:707b8ec050975e11aff829"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
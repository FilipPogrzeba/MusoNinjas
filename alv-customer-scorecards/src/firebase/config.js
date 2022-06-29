
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDvNFSNZoQb-WaatPiq8heJ3b5WVKBMbnI",
  authDomain: "alv-customer-scorecards.firebaseapp.com",
  projectId: "alv-customer-scorecards",
  storageBucket: "alv-customer-scorecards.appspot.com",
  messagingSenderId: "171138256532",
  appId: "1:171138256532:web:23bdd307f6fc8cde7aee81"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
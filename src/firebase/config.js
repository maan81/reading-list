import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBliEEPmbjOvqZPSqfq0GJpCVrrAlsTyvU",
  authDomain: "fb9-firebase-reading-list.firebaseapp.com",
  projectId: "fb9-firebase-reading-list",
  storageBucket: "fb9-firebase-reading-list.appspot.com",
  messagingSenderId: "655146748981",
  appId: "1:655146748981:web:ff3075c4addf0d2a75357c"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

export { db }
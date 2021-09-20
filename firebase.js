import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAyE7BDdEZlodfdEaMhxRo6KT-HVQDUJ4',
  authDomain: 'amaz-clone-f1c4e.firebaseapp.com',
  projectId: 'amaz-clone-f1c4e',
  storageBucket: 'amaz-clone-f1c4e.appspot.com',
  messagingSenderId: '746071726242',
  appId: '1:746071726242:web:b29f7049265758fa1c9ffb',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db

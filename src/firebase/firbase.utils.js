import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
const config={
    apiKey: "AIzaSyAYZWnC1mK4eSnWvRRlxMd441_HczarIng",
    authDomain: "crwn-a18ba.firebaseapp.com",
    databaseURL: "https://crwn-a18ba.firebaseio.com",
    projectId: "crwn-a18ba",
    storageBucket: "",
    messagingSenderId: "233956415364",
    appId: "1:233956415364:web:b4df1bc2dc63675e"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()

  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const SignInWithGoogle = () =>auth.signInWithPopup(provider)
  export default firebase
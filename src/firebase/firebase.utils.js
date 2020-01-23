import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "ecommerc3-db.firebaseapp.com",
    databaseURL: "https://ecommerc3-db.firebaseio.com",
    projectId: "ecommerc3-db",
    storageBucket: "ecommerc3-db.appspot.com",
    messagingSenderId: "250882480800",
    appId: "1:250882480800:web:8df71f5eae20c30ecec7c5",
    measurementId: "G-PMY15ETZKQ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'ecommerc3-db.firebaseapp.com',
  databaseURL: 'https://ecommerc3-db.firebaseio.com',
  projectId: 'ecommerc3-db',
  storageBucket: 'ecommerc3-db.appspot.com',
  messagingSenderId: '250882480800',
  appId: '1:250882480800:web:8df71f5eae20c30ecec7c5',
  measurementId: 'G-PMY15ETZKQ',
}

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth

    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

//Seed Data
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  try {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })
    //batch.commit()
  } catch (error) {
    console.log(error)
  }
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA1oKkBchtcvu05qkY38XjpmKZPWwvfdRI",
  authDomain: "react-app-1cdea.firebaseapp.com",
  projectId: "react-app-1cdea",
  storageBucket: "react-app-1cdea.appspot.com",
  messagingSenderId: "225868507630",
  appId: "1:225868507630:web:c2a03e5149e530ad3346ff",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }

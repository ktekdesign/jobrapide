import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging/sw'

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'tchadcarriere-ca8fe.firebaseapp.com',
  databaseURL: 'https://tchadcarriere-ca8fe.firebaseio.com',
  projectId: 'tchadcarriere-ca8fe',
  storageBucket: 'tchadcarriere-ca8fe.appspot.com',
  messagingSenderId: '1033278726825',
  appId: '1:1033278726825:web:753a3246709b23f7b13fb8',
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
getMessaging(firebaseApp)

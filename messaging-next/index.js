import {
  getMessaging,
  getToken,
  deleteToken,
  onMessage,
} from 'firebase/messaging'
import { initializeApp } from 'firebase/app'

export function getMessagingObject() {
  getMessaging()
}

export function receiveMessage() {
  const messaging = getMessaging()
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload)
  })
}

export default function getTokenApp() {
  const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'tchadcarriere-ca8fe.firebaseapp.com',
    databaseURL: 'https://tchadcarriere-ca8fe.firebaseio.com',
    projectId: 'tchadcarriere-ca8fe',
    storageBucket: 'tchadcarriere-ca8fe.appspot.com',
    messagingSenderId: '1033278726825',
    appId: '1:1033278726825:web:753a3246709b23f7b13fb8',
  })
  const messaging = getMessaging(firebaseApp)
  getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        )
        requestPermission()
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
    })
}

export function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    } else {
      console.log('Unable to get permission to notify.')
    }
  })
}

export function deleteTokenApp() {
  const messaging = getMessaging()
  deleteToken(messaging)
    .then(() => {
      console.log('Token deleted.')
    })
    .catch((err) => {
      console.log('Unable to delete token. ', err)
    })
}

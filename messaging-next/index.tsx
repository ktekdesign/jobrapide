import {
  getMessaging,
  getToken,
  deleteToken,
  onMessage,
} from 'firebase/messaging'
import { initializeApp } from 'firebase/app'
import { useCallback, useEffect, useState } from 'react'

export function getMessagingObject() {
  getMessaging()
}

export function receiveMessage() {
  const messaging = getMessaging()
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload)
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

export default function NotificationSignal() {
  const [token, setToken] = useState(false)
  const getTokenApp = useCallback(() => {
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
          setToken(true)
        } else {
          requestPermission()
        }
      })
      .catch(() => {
        setToken(true)
      })
  }, [])
  const requestPermission = () => {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      setToken(true)
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          new Notification(
            'Vous recevrez desormais les notifications de nouvelles publications de JobRapide'
          )
          // …
        }
      })
    } else {
      setToken(true)
    }
  }
  useEffect(() => {
    if (!token) getTokenApp()
  }, [getTokenApp, token])

  return <></>
}

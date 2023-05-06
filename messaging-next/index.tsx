import {
  getMessaging,
  getToken,
  deleteToken,
  onMessage,
} from 'firebase/messaging'
import { initializeApp } from 'firebase/app'
import Bell from '/public/images/bell.svg'
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
  const [token, setToken] = useState('')
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
          setToken(currentToken)
        } else {
          requestPermission()
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })
  }, [])
  const requestPermission = () => {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      console.log('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      new Notification(
        'Vous recevrez desormais les notifications de nouvelles publications de JobRapide'
      )
      // …
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
    }
  }
  useEffect(() => getTokenApp(), [getTokenApp])
  console.log(token)
  if (!token)
    return (
      <div className="notification-bell" onClick={requestPermission}>
        <Bell className="h-6 w-6" />
      </div>
    )
}

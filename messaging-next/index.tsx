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
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.')
      } else {
        console.log('Unable to get permission to notify.')
      }
    })
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

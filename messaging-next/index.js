import {
  getMessaging,
  getToken,
  deleteToken,
  onMessage,
} from 'firebase/messaging'
import { initializeApp } from 'firebase/app'

// [SNIPPET_REGISTRY disabled]
// [SNIPPETS_SEPARATION enabled]

export function getMessagingObject() {
  // [START messaging_get_messaging_object]
  getMessaging()
  // [END messaging_get_messaging_object]
}

export function receiveMessage() {
  // [START messaging_receive_message]
  // Handle incoming messages. Called when:
  // - a message is received while the app has focus
  // - the user clicks on an app notification created by a service worker
  //   `messaging.onBackgroundMessage` handler.

  const messaging = getMessaging()
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload)
    // ...
  })
  // [END messaging_receive_message]
}

export default function getTokenApp() {
  // [START messaging_get_token]
  const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'tchadcarriere-ca8fe.firebaseapp.com',
    databaseURL: 'https://tchadcarriere-ca8fe.firebaseio.com',
    projectId: 'tchadcarriere-ca8fe',
    storageBucket: 'tchadcarriere-ca8fe.appspot.com',
    messagingSenderId: '1033278726825',
    appId: '1:1033278726825:web:753a3246709b23f7b13fb8',
  })
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  const messaging = getMessaging(firebaseApp)
  getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.'
        )
        requestPermission()
        // ...
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
      // ...
    })
  // [END messaging_get_token]
}

export function requestPermission() {
  // [START messaging_request_permission]
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
      // TODO(developer): Retrieve a registration token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.')
    }
  })
  // [END messaging_request_permission]
}

export function deleteTokenApp() {
  // [START messaging_delete_token]

  const messaging = getMessaging()
  deleteToken(messaging)
    .then(() => {
      console.log('Token deleted.')
      // ...
    })
    .catch((err) => {
      console.log('Unable to delete token. ', err)
    })
  // [END messaging_delete_token]
}

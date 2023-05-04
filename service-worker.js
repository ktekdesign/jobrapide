/* eslint-disable @typescript-eslint/no-var-requires */
// [SNIPPET_REGISTRY disabled]
// [SNIPPETS_SEPARATION enabled]

import { initializeApp } from 'firebase/app'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAFSyBBLMgYqk33chY6n4gHfGtWDLFuRuU',
  appId: '1:1033278726825:web:753a3246709b23f7b13fb8',
  projectId: 'tchadcarriere-ca8fe',
})

// See: https://github.com/microsoft/TypeScript/issues/14877
/** @type {ServiceWorkerGlobalScope} */
let self

function initInSw() {
  // [START messaging_init_in_sw]
  const { initializeApp } = require('firebase/app')
  const { getMessaging } = require('firebase/messaging/sw')

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
  const messaging = getMessaging(firebaseApp)
  // [END messaging_init_in_sw]
}

function onBackgroundMessage() {
  // [START messaging_on_background_message]
  const { getMessaging } = require('firebase/messaging/sw')
  const { onBackgroundMessage } = require('firebase/messaging/sw')

  const messaging = getMessaging()
  onBackgroundMessage(messaging, (payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    )
    // Customize notification here
    const notificationTitle = payload.notificationTitle
    const notificationOptions = {
      body: payload.body,
      icon: payload.icon,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
  })
  // [END messaging_on_background_message]
}

import firebase from 'firebase/app'

import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCfMV78AVyLWFfpGMMfg7VkBkxuntymfv0",
    authDomain: "comments-vitor.firebaseapp.com",
    databaseURL: "https://comments-vitor.firebaseio.com",
    projectId: "comments-vitor",
    storageBucket: "comments-vitor.appspot.com",
    messagingSenderId: "957645952048",
    appId: "1:957645952048:web:b1b7bcea0fea7e5d8549f5"
  };
  // Initialize Firebase
  firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()

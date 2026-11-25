importScripts('https://www.gstatic.com/firebasejs/13.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/13.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB_A6wdRHB081yrKCq_71GXuZ-lUq9RTYM",
  authDomain: "maringram-fad7e.firebaseapp.com",
  projectId: "maringram-fad7e",
  storageBucket: "maringram-fad7e.firebasestorage.app",
  messagingSenderId: "811014220220",
  appId: "1:811014220220:web:2a6f15322bc567af77a3b9",
  measurementId: "G-R3YED2Z68L"
});

const messaging = firebase.messaging();
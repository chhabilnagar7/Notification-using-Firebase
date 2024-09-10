// import { initializeApp } from "firebase/app.js";
// import { getMessaging } from "firebase/messaging.js";

importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyBHRMxCtT3a8C3PM5s9U6SzbVSYbalXswk",
    authDomain: "fir-notification-22134.firebaseapp.com",
    projectId: "fir-notification-22134",
    storageBucket: "fir-notification-22134.appspot.com",
    messagingSenderId: "506977031832",
    appId: "1:506977031832:web:160f746e6cdb6d098562ed",
    measurementId: "G-K23JK5WTZK"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
    console.log('Received background message',payload);
})



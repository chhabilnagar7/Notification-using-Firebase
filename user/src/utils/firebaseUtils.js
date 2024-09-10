import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBHRMxCtT3a8C3PM5s9U6SzbVSYbalXswk",
    authDomain: "fir-notification-22134.firebaseapp.com",
    projectId: "fir-notification-22134",
    storageBucket: "fir-notification-22134.appspot.com",
    messagingSenderId: "506977031832",
    appId: "1:506977031832:web:160f746e6cdb6d098562ed",
    measurementId: "G-K23JK5WTZK"
};

const vapidKey = "BJCICeij1UBND3ZaMwGmZAdpxVoYIKEmhHoeY4wOb4RwxAjlYgBz1aFReGFg2L6K2BOgOhajMnwF4cjWQbxuoDY";

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);


export const requestFCMToken = async () =>{
    return Notification.requestPermission()
    .then((permission) =>{
        if(permission === 'granted'){
            return getToken(messaging,{vapidKey})
        }else{
            throw new Error("Notification not granted");
        }
    })
    .catch((err) => {
        console.error("Error getting FCM token: ",err);
        throw err
    }) 
}

export const onMessageListner = () =>{
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        })
    })
}
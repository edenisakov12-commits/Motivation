importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyATfY1TGL01-VVFdBwfbZ65-ctXtkYufzI",
    authDomain: "message-505ba.firebaseapp.com",
    projectId: "message-505ba",
    storageBucket: "message-505ba.firebasestorage.app",
    messagingSenderId: "712427275013",
    appId: "1:712427275013:web:a6a579f958815690b86d6c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3022/3022215.png' // אייקון חמוד של בקבוק
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// importScripts('http://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
// importScripts('http://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');
// importScripts('/firebase/firebase-app.js');
// importScripts('/firebase/firebase-messaging.js');
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBPFiyz49FcDxqChjaD_kXesOD1rtb-MGA",
//   authDomain: "project-aa1d1.firebaseapp.com",
//   projectId: "project-aa1d1",
//   storageBucket: "project-aa1d1.appspot.com",
//   messagingSenderId: "978502731478",
//   appId: "1:978502731478:web:2ee87c39b0918bf18feb77",
//   measurementId: "G-M42X1P18HS"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage((payload) => {
//   console.log('Received background message ', payload);
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPFiyz49FcDxqChjaD_kXesOD1rtb-MGA",
  authDomain: "project-aa1d1.firebaseapp.com",
  projectId: "project-aa1d1",
  storageBucket: "project-aa1d1.appspot.com",
  messagingSenderId: "978502731478",
  appId: "1:978502731478:web:2ee87c39b0918bf18feb77",
  measurementId: "G-M42X1P18HS"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

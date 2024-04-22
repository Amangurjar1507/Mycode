import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAB-7SMmAHrNieYV2BWGFL7um-fJKiynDU",
    authDomain: "myapp-f6635.firebaseapp.com",
    databaseURL: "https://myapp-f6635.firebaseio.com",
    projectId: "myapp-f6635",
    storageBucket: "myapp-f6635.appspot.com",
    messagingSenderId: "962237953454",
    appId: "1:962237953454:android:e415bf2014a475faecc43f"
};

// Initialize Firebase app if not already initialized
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

export { db }; // Export db instead of default









// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAB-7SMmAHrNieYV2BWGFL7um-fJKiynDU",
//   authDomain: "myapp-f6635.firebaseapp.com",
//   databaseURL: "https://myapp-f6635.firebaseio.com",
//   projectId: "myapp-f6635",
//   storageBucket: "myapp-f6635.appspot.com",
//   messagingSenderId: "962237953454",
//   appId: "1:962237953454:android:e415bf2014a475faecc43f"
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export default app;
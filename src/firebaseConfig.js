import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAyYqXeLXWZ4d-4NK44LWSnOzlC9O3Vnr0",
    authDomain: "restaurantapp-126ce.firebaseapp.com",
    databaseURL: "https://restaurantapp-126ce-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-126ce",
    storageBucket: "restaurantapp-126ce.appspot.com",
    messagingSenderId: "652756666639",
    appId: "1:652756666639:web:43040fb07d8ee5a693d67a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAPX72x5xLb1xToNSRfTSIzmSoi1iRxFL0",
  authDomain: "tiktok---jornada-5eea9.firebaseapp.com",
  projectId: "tiktok---jornada-5eea9",
  storageBucket: "tiktok---jornada-5eea9.appspot.com",
  messagingSenderId: "634185518838",
  appId: "1:634185518838:web:fcf748cc79678f2cac66d7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
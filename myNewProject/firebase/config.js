import AsyncStorage from "@react-native-async-storage/async-storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGw6_H9IKWhlb7dhU5UHVxfly1LvOT6Qo",
  authDomain: "react-native-hw-d116c.firebaseapp.com",
  databaseURL: "https://react-native-hw-d116c-default-rtdb.firebaseio.com",
  projectId: "react-native-hw-d116c",
  storageBucket: "react-native-hw-d116c.appspot.com",
  messagingSenderId: "515724937374",
  appId: "1:515724937374:web:f60590b717c4d366c9538f"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
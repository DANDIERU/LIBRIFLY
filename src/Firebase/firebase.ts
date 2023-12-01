import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { dispatch } from "../store";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence 
  } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};


export default {
    registerUser,
    loginUser,
  };










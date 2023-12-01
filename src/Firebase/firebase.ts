import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString, getDownloadURL } from "firebase/storage";
import { users } from "../types/user";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence, 
  } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage();


// REGISTER
const createUser = async (email: string,password: string, username: string) => {
  //Primer paso: Crear usuario con auth
  createUserWithEmailAndPassword(auth,email,password).then(async (userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    //Segundo paso: Crear datos del usuario en la 
    //colección users
    try {
      const where = doc(db, "users", user.uid);
      const data = {
        username: username,
      }
      await setDoc(where, data);
      console.log("Se añadió")
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


//SIGN IN
const signIn = async ({
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


// AY YA NO SE

// Función para copiar libros de la colección "books" a la colección "bookslist"
async function copyBooksToBooksList() {
  try {
    // Obtén la referencia a la instancia de Firestore
    const db = getFirestore();

    // Obtén todos los documentos de la colección "books"
    const booksSnapshot = await getDocs(collection(db, 'Library'));

    // Itera sobre los documentos y agrégalos a la colección "bookslist"
    booksSnapshot.forEach(async (doc) => {
      const bookData = doc.data();

      // Agrega el libro a la colección "bookslist"
      await addDoc(collection(db, 'bookslist'), bookData);

      console.log(`Libro "${bookData.title}" agregado a la colección "bookslist"`);
    });

    console.log('Proceso completado con éxito.');
  } catch (error) {
    console.error('Error al copiar libros:', error);
  }
}




const getBooks = async () => {
  const querySnapshot = await getDocs(collection(db,"Library"));
  const transformed:any = [];

  querySnapshot.forEach((doc)=>{
      const data = doc.data();
      transformed.push({id: doc.id, ...data})


  })

  return transformed;

}




export const uploadList = async (name: string, imagen: File) => {
  console.log(imagen)
  const imageURL: string | void = await subirArchivo(imagen)
  await subirDatos( name, imageURL)
}

export const subirArchivo = async (file: File) => {
  const storageRef = await ref(storage, `imagesProductos/${file.name}`);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  return await pedirURL(`imagesProductos/${file.name}`)
}

export const pedirURL = async (path: string) => {
  const url = await getDownloadURL(ref(storage, `${path}`))
  console.log(url)
  return url
}

const subirDatos = async (name: string, imagen: string | void) => {
  console.log("intenta subir")
  const docRef = await addDoc(collection(db, "Lists"), {
    name: name,      
    imagen: imagen,
    date: new Date()
  });
  console.log("Se subio el producto")
  await updateDoc(docRef, {
      listID: docRef.id
      }
  )
}





// Exports
export default {
    createUser,
    signIn,
    copyBooksToBooksList,
    getBooks,
  };









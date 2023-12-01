
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, collection, query, getDocs, onSnapshot, orderBy, addDoc, updateDoc} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, uploadString, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCoO6QgyXgzAyyOFfP0Q_VmNtYl6gOMSfY",
    authDomain: "dca-2023-501d7.firebaseapp.com",
    projectId: "dca-2023-501d7",
    storageBucket: "dca-2023-501d7.appspot.com",
    messagingSenderId: "761202219784",
    appId: "1:761202219784:web:7bd9b28f2140034b386abd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

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
export default {
    getBooks,
    
}


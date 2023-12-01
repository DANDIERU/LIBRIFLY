
import { initializeApp } from 'firebase/app';
import { collection, getFirestore, getDocs} from 'firebase/firestore'

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

const getBooks = async () => {
    const querySnapshot = await getDocs(collection(db,"Library"));
    const transformed:any = [];

    querySnapshot.forEach((doc)=>{
        const data = doc.data();
        transformed.push({id: doc.id, ...data})


    })

    return transformed;

}

export default {
    getBooks
}


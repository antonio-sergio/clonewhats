import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const fbPopup = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    
    let result = await firebaseApp.auth().signInWithPopup(provider);
    return result;
    

};

export default { fbPopup };

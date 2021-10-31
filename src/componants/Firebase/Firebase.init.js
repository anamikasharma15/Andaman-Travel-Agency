import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.config";

const firebaseInitialize = () => {
    initializeApp(firebaseConfig); 
}
export default firebaseInitialize; 
 
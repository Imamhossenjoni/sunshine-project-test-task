// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAavfTRISbWllwmTM011tsJW3dMDoTLzzA",
  authDomain: "sunshine-project-task.firebaseapp.com",
  projectId: "sunshine-project-task",
  storageBucket: "sunshine-project-task.appspot.com",
  messagingSenderId: "136598917795",
  appId: "1:136598917795:web:dd37c79a94aac935fba516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;

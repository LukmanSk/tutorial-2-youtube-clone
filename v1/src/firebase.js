import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiIz6XgKmOe7t_e5zW4MrZ6Krlr20SNz4",
  authDomain: "clone-2-47df7.firebaseapp.com",
  projectId: "clone-2-47df7",
  storageBucket: "clone-2-47df7.appspot.com",
  messagingSenderId: "548909602473",
  appId: "1:548909602473:web:3253b5c5ddaddb8c133bb8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

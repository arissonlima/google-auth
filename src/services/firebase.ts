import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfUcEv8YFXWbTtX98vpeYaXaKOoVq6j2M",
  authDomain: "auth-rocketseat-yt.firebaseapp.com",
  projectId: "auth-rocketseat-yt",
  storageBucket: "auth-rocketseat-yt.appspot.com",
  messagingSenderId: "152794616165",
  appId: "1:152794616165:web:c426cf2a0cd714e8ca518c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOmomVUyBqHet7hst_bA0oHf-vJew6B0U",
  authDomain: "worldcup2022shop-augustobunge.firebaseapp.com",
  projectId: "worldcup2022shop-augustobunge",
  storageBucket: "worldcup2022shop-augustobunge.appspot.com",
  messagingSenderId: "393228015214",
  appId: "1:393228015214:web:6b04901667fd984063387f"
};


const app = initializeApp(firebaseConfig);


export default function getFirestoreApp() {

    return app
}
import { initializeApp } from 'firebase/app';
import { getAuth,  } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCfb7jGRpmghtgtzvnhYYWNGiFH8OkLm8Q",
  authDomain: "loja-virtual-3a05e.firebaseapp.com",
  projectId: "loja-virtual-3a05e",
  storageBucket: "loja-virtual-3a05e.appspot.com",
  messagingSenderId: "945353166949",
  appId: "1:945353166949:web:a2712365118ec49900768c",
  measurementId: "G-0R4RKNWBXV"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de autenticación de Firebase
const authInstance = getAuth(app);

export { authInstance as auth, app as firebase }; // Exporta 'auth' y 'firebase'
export const analytics = getAnalytics(app);



registro-de-usuario
export default firebaseConfig;

export default firebaseConfig;
 main

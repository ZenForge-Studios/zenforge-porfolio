import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCy2gseGEpr4GNQR9DLlIVdviNOcFiRwPM",
  authDomain: "zenforge-8ab62.firebaseapp.com",
  projectId: "zenforge-8ab62",
  storageBucket: "zenforge-8ab62.firebasestorage.app",
  messagingSenderId: "42699676736",
  appId: "1:42699676736:web:0181abc9dcb863af7dd3a5",
  measurementId: "G-NK03MJ32MV"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Función de login con Google/GitHub
const loginWithProvider = async (provider) => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Usuario autenticado:", result.user);
  } catch (error) {
    console.error("Error en autenticación:", error);
  }
};

// Registro con email y contraseña
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado:", userCredential.user);
  } catch (error) {
    console.error("Error en registro:", error);
  }
};

// Cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

export { auth, googleProvider, githubProvider, loginWithProvider, registerUser, logout };
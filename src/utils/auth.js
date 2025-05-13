import { auth, googleProvider, githubProvider, loginWithProvider, registerUser, logout } from "./firebaseConfig";

document.addEventListener("DOMContentLoaded", () => {
  const googleLoginBtn = document.getElementById("google-login");
  const githubLoginBtn = document.getElementById("github-login");
  const emailRegisterBtn = document.getElementById("register-btn");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const logoutBtn = document.getElementById("logout-btn");

  // Verificar estado de autenticación
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("Usuario activo:", user);
      googleLoginBtn.classList.add("hidden");
      githubLoginBtn.classList.add("hidden");
      emailRegisterBtn.classList.add("hidden");
      logoutBtn.classList.remove("hidden");
    } else {
      googleLoginBtn.classList.remove("hidden");
      githubLoginBtn.classList.remove("hidden");
      emailRegisterBtn.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
    }
  });

  // Autenticación con Google y GitHub
  googleLoginBtn.addEventListener("click", () => loginWithProvider(googleProvider));
  githubLoginBtn.addEventListener("click", () => loginWithProvider(githubProvider));

  // Registro con correo y contraseña
  emailRegisterBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    registerUser(email, password);
  });

  // Cerrar sesión
  logoutBtn.addEventListener("click", () => logout());
});
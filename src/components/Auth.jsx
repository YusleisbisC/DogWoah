import React, { useState } from 'react';
import { auth, firebase } from '../firebase'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Auth.css'; // Importa tu archivo de estilos CSS para Auth
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInWithGoogle = async () => {
    const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    try {
      // Maneja el inicio de sesión exitoso aquí
    } catch (error) {
      console.error(error);  
    }
  };

  const handleSignUpWithEmailPassword = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password); // Cambio en esta línea
      // Maneja el registro exitoso aquí
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInWithEmailPassword = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password); // Cambio en esta línea
      // Maneja el inicio de sesión exitoso aquí
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Maneja el cierre de sesión aquí
    } catch (error) {
      console.error(error);
    }
  };

  // Aquí puedes obtener el usuario actualmente autenticado
  const user = auth.currentUser;

  return (
    <div className="auth-container">
      {user ? (
        <div>
          <p>¡Hola, {user.displayName}!</p>
          <button className="sign-out-button" onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <p>No has iniciado sesión.</p>
          <button className="google-sign-in-button" onClick={handleSignInWithGoogle}>
            <FontAwesomeIcon icon={faGoogle} /> Iniciar sesión con Google
          </button>
          <div className="email-sign-in">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="email-sign-in-button" onClick={handleSignInWithEmailPassword}>
              Iniciar sesión con correo y contraseña
            </button>
            <button className="email-sign-up-button" onClick={handleSignUpWithEmailPassword}>
              Registrarse con correo y contraseña
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

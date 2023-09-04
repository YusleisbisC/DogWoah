import React, { useState } from 'react';
import { auth } from '../firebase'; // Asegúrate de importar la instancia de autenticación adecuada
import './Auth.css'; // Importa tu archivo de estilos CSS para Auth
 registro-de-usuario
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
 main

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Variable de estado para validar el correo

 registro-de-usuario
  const isPasswordValid = password.length >= 6; // Verifica si la contraseña es válida (puedes personalizar esto)

  const handleSignUpWithEmailPassword = async () => {
    try {
      setIsLoading(true);

      if (!isEmailValid || !isPasswordValid || password !== confirmPassword) {
        console.error('Datos de registro no válidos');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

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
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithEmailPassword = async () => {
    try {
 registro-de-usuario
      setIsLoading(true);

      if (!isEmailValid || !isPasswordValid) {
        console.error('Datos de inicio de sesión no válidos');
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);

      const result = await signInWithEmailAndPassword(auth, email, password); // Cambio en esta línea
      // Maneja el inicio de sesión exitoso aquí main
    } catch (error) {
      console.error(error);

      // Verifica si el error se debió a una contraseña incorrecta
      if (error.code === 'auth/wrong-password') {
        setIsPasswordIncorrect(true);
      } else {
        setIsPasswordIncorrect(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    // Utiliza una expresión regular para verificar el formato del correo
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsEmailValid(isValid);
  };

  const user = auth.currentUser;

  return (
    <div className="auth-container">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {user ? (
            <div>
              <p>¡Hola, {user.displayName}!</p>
              <button className="sign-out-button" onClick={handleSignOut}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div>
              {isRegisterMode ? (
                <div className="email-sign-in">
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    className={isEmailValid ? '' : 'invalid'}
                  />
                  {!isEmailValid && <p className="error-message">Correo electrónico no válido</p>}
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button className="email-sign-up-button" onClick={handleSignUpWithEmailPassword}>
                    Registrarse con correo y contraseña
                  </button>
                  <p>¿Ya tienes una cuenta? <span onClick={() => setIsRegisterMode(false)}>Iniciar sesión</span></p>
                </div>
              ) : (
                <div className="email-sign-in">
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    className={isEmailValid ? '' : 'invalid'}
                  />
                  {!isEmailValid && <p className="error-message">Correo electrónico no válido</p>}
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {isPasswordIncorrect && <p className="error-message">Contraseña incorrecta</p>}
                  <button className="email-sign-in-button" onClick={handleSignInWithEmailPassword}>
                    Iniciar sesión con correo y contraseña
                  </button>
                  <p>¿No tienes una cuenta? <span onClick={() => setIsRegisterMode(true)}>Registrarse</span></p>
                </div>
              )}
            </div>
          )}
        </>
      )}
 registro-de-usuario
    </div>
  );
};



    </div>
  );
};
 main

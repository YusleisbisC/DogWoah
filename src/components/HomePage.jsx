import React from 'react';
import { Navbar } from "./Navbar";
import Slideshow from "./Slideshow"; // Asegúrate de tener la ruta correcta


export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="slideshow-container">
        <Slideshow />
      </div>
      <div className="content">Bienvenidos a DogWuaoh</div>
    </div>
  );
};


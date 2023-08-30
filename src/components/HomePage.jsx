import React from 'react';
import { Navbar } from "./Navbar";
import {Slideshow} from "./Slideshow"; // Asegúrate de tener la ruta correcta
import { Footer } from './Footer';
import { DestacadosSection } from './DestacadosSection';




export const HomePage = () => {
  return (

    
    <div>
  <Navbar />
  <div className="slideshow-container">
    <Slideshow />
  </div>
  <div className="content">
   <DestacadosSection/>
  </div>
  <Footer />
</div>

  );
};


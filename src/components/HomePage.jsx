import React from 'react';
import { Navbar } from "./Navbar";
import {Slideshow} from "./Slideshow"; // Asegúrate de tener la ruta correcta
import { Footer } from './Footer';
import { DestacadosSection } from './DestacadosSection';
import { ProductForm } from './ProductForm';





export const HomePage = () => {
  return (

    
    <div >
  <div >
  <Navbar />
  </div>
  <div className="slideshow-container">
    <Slideshow />
  </div>
  <div className='container'>
  <ProductForm/>
  </div>
  <div className="content">
   <DestacadosSection/>
  </div>
  <div>
  <Footer />
  </div>
  </div>

  );
};


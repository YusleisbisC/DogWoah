import React from 'react';
import { Navbar } from "./Navbar";
import {Slideshow} from "./Slideshow"; // Asegúrate de tener la ruta correcta
import { Footer } from './Footer';
import { DestacadosSection } from './DestacadosSection';




export const HomePage = () => {
  return (

    
    <div >
  <div >
  <Navbar />
  </div>
  <div className="slideshow-container">
    <Slideshow />
  </div>
  <div>
  <h1 className="main-title">Bem-vindo ao DOGWOAH</h1>
  <p className="title"> Mais do que uma loja onde você encontra seus produtos preferidos, você tem uma casa que mima seus cachorrinhos.</p>
  </div>
  <div className='container'>
  
  
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


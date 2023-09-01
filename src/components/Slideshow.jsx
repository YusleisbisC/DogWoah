import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage } from './ExampleCarouselImage';
import './Slideshow.css';

const images = [
  {
    imageUrl: 'https://i.pinimg.com/564x/6a/ab/0f/6aab0f8c573248e63c47ccd9aca18355.jpg',
    altText: 'Descripción de la imagen 1',
  },
  {
    imageUrl: 'URL_DE_TU_IMAGEN_2',
    altText: 'Descripción de la imagen 2',
  },
  {
    imageUrl: 'URL_DE_TU_IMAGEN_3',
    altText: 'Descripción de la imagen 3',
  },
];

export function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <ExampleCarouselImage imageUrl={image.imageUrl} altText={image.altText} />
          <Carousel.Caption>
            {/* Puedes agregar títulos y descripciones personalizadas aquí */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

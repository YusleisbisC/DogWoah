
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css';


export const Slideshow = () => {
  return (
    <div className='slideshow-container'>
      
    <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
      <div >
        <img src="https://media.istockphoto.com/id/1050280220/pt/foto/happy-smiling-pug-puppy-dog-holding-up-shopping-basket-wearing-diadem-with-red-sale-sign.jpg?s=1024x1024&w=is&k=20&c=ByduEqfq-PUNZ7M5xJZfiarMpcMck4AbqL4s9602O5o=" alt="Imagen 1" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1397603772/es/foto/tendido-plano-con-accesorios-para-perro-y-gato-sobre-fondo-de-madera-blanca-cuidado-de-mascotas.jpg?s=1024x1024&w=is&k=20&c=IAzfzoNVrsL3Gees2L3kLSs0p7jQeuhBXl_tgYlWMzY=" alt="Imagen 2" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/612739772/es/foto/lindo-frontera-collie-con-gran-mascota-huesos-en-la-tienda-de-mascotas.jpg?s=1024x1024&w=is&k=20&c=nWsDuFozmaNs3LRIQ_wNQef79wBJLpBAHDj3UuUO0So=" alt="Imagen 3" />
      </div>

      <div>
        <img src="https://media.istockphoto.com/id/1319585202/es/foto/retrato-del-perro-jack-russell-terrier-sosteniendo-una-bolsa-de-papel-en-su-boca-sobre-un.jpg?s=612x612&w=0&k=20&c=xB27nU_B1X70LGSEu9Twgps_hofAAA1-GRhJFWsm_1I=" alt="Imagen 1" />
      </div>
    </Carousel>
    </div>
  );
};


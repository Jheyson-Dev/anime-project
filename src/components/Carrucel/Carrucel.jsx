import { Carousel } from 'react-configurable-carousel';
import slide1 from '../../assets/Carrucel/Slide1.webp';
import slide2 from '../../assets/Carrucel/Slide2.webp';
import slide3 from '../../assets/Carrucel/Slide3.webp';
import slide4 from '../../assets/Carrucel/Slide4.webp';
import slide5 from '../../assets/Carrucel/Slide5.webp';

export const Carrucel = () => {
  return (
    <Carousel
      arrows={true}
      dotsNavigation={true}
      dotsNavigationInside={false}
      dotNavigationOutlineColor='#FAF7FF'
      dotNavigationFillColor='#6354CF'
      carouselStyle={'3d'}
    >
      <img
        src={slide1}
        alt=''
        className='h-full'
      />

      <img
        src={slide2}
        alt=''
        className='h-full'
      />

      <img
        src={slide3}
        alt=''
        className='h-full'
      />

      <img
        src={slide4}
        alt=''
        className='h-full'
      />

      <img
        src={slide5}
        alt=''
        className='h-full'
      />
    </Carousel>
  );
};

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import './HeroSlider.css'; 

const slides = [
  {
    id: 1,
    imageUrl: image1,
    caption: 'Slide 1',
  },
  {
    id: 2,
    imageUrl: image2,
    caption: 'Slide 2',
  },
  {
    id: 3,
    imageUrl: image3,
    caption: 'Slide 3',
  },
];

const HeroSlider = () => {
  return (
    <div className="hero-slider-container">
      <Carousel>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="slide-item">
            <img src={slide.imageUrl} alt={slide.caption} />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;

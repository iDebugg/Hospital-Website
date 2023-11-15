import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carouselimg1 from './img/ROOM1.jpeg'
import Carouselimg2 from './img/ROOM2.jpeg'
import Carouselimg3 from './img/ROOM3.jpeg'


function CarouselPart() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <Carouselimg1 text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carouselimg2 text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carouselimg3 text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPart;
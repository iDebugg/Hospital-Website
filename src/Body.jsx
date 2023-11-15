import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carouselimg1 from './img/ROOM1.jpeg'
import Carouselimg2 from './img/ROOM2.jpeg'
import Carouselimg3 from './img/ROOM3.jpeg'
import './App.css';


function Body () {
    return (
        <>
<div>

    <Carousel>
      <Carousel.Item>
        <img src={Carouselimg1} alt="" Text="Third slide" className='Carouselimages' />
        
        <Carousel.Caption>
          <h3>Laboratory Room</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carouselimg2} alt="" Text="Third slide" className='Carouselimages'/>
        <Carousel.Caption>
          <h3>Reception Room</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carouselimg3} alt="" Text="Third slide" className='Carouselimages' />
        <Carousel.Caption>
          <h3>Second Recption Room</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   </div>
   <div>
    <h4 className='textAfterCarousel' data-aos="zoom-in">Welcome to Heirs Multi Specialist Hospital, Oye-Ekiti</h4>
   </div>
   <div>
    <h2 className='text-center'>Our Services</h2>
    <h5 className='text-center p-3 ourServicesText'>The inpatient and outpatient services offered by Physical Medicine and Rehabilitation are designed with a primary goal in mind: to restore function and help our patients achieve the quality of life they desire. Whether that means managing pain, learning to walk, preparing to work, or adjusting to life after illness, our team of experts work with patients and families to design an individualized treatment plan tailored to the patient’s unique needs.
</h5>
   </div>
   </>
    )
}

export default Body
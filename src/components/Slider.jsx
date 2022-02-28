import React from "react";
import { Carousel } from "react-bootstrap";

import '../styles/sass/Slider.scss'

import card1 from '../img/card3.jpg';
import card2 from '../img/card1.jpg';
import card3 from '../img/card4.jpg';

const Slider = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={card1} 
          alt="First slide"
        />
        <Carousel.Caption style={{color:"#ff7f50", fontSize: '1.5rem'}}>
          <h3>Mr & Mrs Heisenberg Gremlin</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={card2}
          alt="Second slide"
        />

        <Carousel.Caption style={{color:"#ff7f50", fontSize: '1.5rem'}}>
          <h3>Mr & Mrs John Doe</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={card3}
          alt="Third slide"
        />

        <Carousel.Caption style={{color:"#ff7f50", fontSize: '1.5rem'}}>
          <h3>Mr & Mrs Ipsum Lorem</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

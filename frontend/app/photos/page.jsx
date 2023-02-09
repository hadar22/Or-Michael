"use client"
import React, { useState, createRef } from 'react';
import Image from 'next/image'
import BtnSlider from '/components/BtnSlider';

const images = ['/assets/rabbi.jpg','/assets/nav.png', '/assets/israel.png' ]
const page = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== images.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === images.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(images.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }
  return (
    <div className="container-slider">
            {images.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Image src={obj} height={300} width={300} alt="slider"/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
);
};

export default page;

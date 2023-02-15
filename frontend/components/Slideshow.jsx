'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import BtnSlider from '/components/BtnSlider';

const Slideshow=({photos}) =>{
   const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== photos.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === photos.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(photos.length)
      }
  }
    return(
        <div className="container-slider">
            {photos.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"} 
                    >
                        <Image src={obj} className="" width={400} height={150}  alt="slider"/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            
        </div>
    )

};
export default Slideshow;
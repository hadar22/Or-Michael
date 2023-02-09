import React from "react";
import leftArrow from "../public/icons/left-arrow.svg";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <div>{direction === "next" ? '▶':'◀' }</div> 
      
    </button>
  );
}
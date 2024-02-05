import React from "react";
import ICONS from './assets/etoile.png'



const MovieCard = ({ name, image, rate, link }) => {
  return (
    <div className="bg-[#ffffff] w-[550px] flex text-center rounded-xl overflow-hidden relative max-w-xs bg-cover hover:bg-gray-300 ">
              <a href={link} target="_blank">
      <img src={image} alt={`Poster for ${name}`} className=" w-[1000px]  transition duration-300 ease-in-out hover:scale-110" />
      </a>
      <div className=" grid gap-[15px] p-[20px] w-[900px]">
        <span className=" text-xl">{name}</span>
       
        <div className=" flex gap-[10px]">
          <img src={ICONS} className=" w-[20px] h-[20px] " />
          <p className="text-lg">
           {rate}  {""}</p>
          
        </div>
        <a href={link} className=" text-red-600" target="_blank" rel="noopener noreferrer">
            Link
          </a>
          <video src=""></video>
      </div>
    </div>
  );
};

export default MovieCard;
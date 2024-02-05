import React from 'react'
import PHOTOS from './assets/Elegant Beige Black Film Maker Cinematography Business Logo.png'

const Filter = () => {
  return (
    <header className=' bg-gradient-to-r from-white  via-slate-50 to-zinc-500 flex gap-[800px] h-[50px] '>
       <img src={PHOTOS} className=' h-[50px] w-[60px]'></img>
     <div className=' justify-end items-center flex gap-2'>
       <input
          type="search"
          placeholder="Search here!"
          className="bg-[#171616] px-[15px] py-[10px] rounded-xl text-white h-[35px] w-[300px] "
        />
      
   
    <button className='h-[30px] w-[100px] bg-[#000000] text-gray-400 rounded-xl ' >
      Recherche 
    </button>
 

 </div> 
   
</header>
   
  );
};
export default Filter

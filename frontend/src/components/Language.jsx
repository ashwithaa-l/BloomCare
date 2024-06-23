import React from 'react';
import {useNavigate}from  'react-router-dom'
function Language() {
  const navigate=useNavigate();
  const handleLoginClick=()=>{
     navigate('/Home')
  }
  return (
    <div className="bg-[url('/language.png')] h-screen bg-cover bg-center flex items-center justify-center flex-col">
      <div className="text-center text-white text-9xl mb-[2rem] p-[1rem]">
        Select the Language  
      </div>
      <div className='text-center text-white text-8xl mb-[10rem] p-[1rem]'>
      மொழியைத் தேர்ந்தெடுக்கவும்
      </div>
      <div className="flex flex-row gap-[7rem]">
        <button className="text-4xl font-bold border border-white bg-white ml-[1rem] px-[4rem] py-[1.5rem] rounded-[3rem]">Tamil</button>
        <button className=" text-4xl font-bold border border-white bg-white px-[4rem] py-[1.5rem] rounded-[3rem]"  onClick={handleLoginClick}>English</button>
      </div>
    </div>
  );
}
 
export default Language;

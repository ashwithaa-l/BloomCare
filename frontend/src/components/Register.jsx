
import React from 'react';
import { IoFingerPrintOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function Register() {
const navigate=useNavigate();
const handleRegisterClick=()=>{
    navigate('/Login')
}
  return (
    <>
    <div className='bg-[url("register.png")] h-screen bg-cover'>
      <div className='pt-[10rem]'>  
        <p className='font-bold text-8xl ml-[55rem] mb-[3rem]'>Register</p>
        <p className='font-semibold text-3xl ml-[52rem]'>Register if don’t have an account </p>
        </div>
        <form className='flex flex-col mt-[10rem] ml-[40rem]'>
           <div className='mb-[4rem]'> 
            <label className='text-5xl mr-[7rem] font-semibold'>Email:</label>
           <input placeholder='Enter your Email' className=' shadow-lg py-[1rem] text-3xl w-[33.5rem] rounded-[0.5rem]'></input></div>
            <div>
            <label className='text-5xl font-semibold mr-[1.5rem]'>Password:</label>
            <input placeholder='Enter your password' className=' shadow-lg py-[1rem] text-3xl mb-[6rem] w-[33.5rem] rounded-[0.5rem]'></input></div>
        </form>
        <button className='text-3xl font-bold border border-black px-[3rem] py-[1rem] bg-black rounded-[3rem] ml-[55rem] text-white mb-[5rem]'>Register</button>
        <p className=' mb-[3rem] ml-[59rem] text-3xl font-semibold'>or</p>
       <div className='ml-[56rem] mb-[4rem]'><IoFingerPrintOutline  className='text-blue border border-gray-500 rounded-[4rem] p-[0.5rem] text-9xl text-blue-300 bg-white'/></div>
       <div className='flex flex-row gap-[3rem] ml-[40rem]'>
        <p className='mt-[1rem] text-3xl font-semibold'>IF YOU HAVE AN ACCOUNT</p>
        <button onClick={handleRegisterClick} className='border border-black px-[3rem] py-[1rem] rounded-[3rem] bg-black text-white text-3xl'>Login</button>
        </div>
    </div>
    </>
  )
}

export default Register
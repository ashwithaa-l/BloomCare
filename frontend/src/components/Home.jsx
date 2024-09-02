import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const handleHomeClick=()=>{
        navigate('/Login')
    }
  return (
    <>
    <div className="bg-[url('./home.png')] h-screen bg-cover flex-col">
     <div className='flex items-center justify-center flex-col'>
    <p className='text-8xl font-bold pt-[2rem]'>WELCOME TO  BLOOM CARE</p>
    <p className='relative text-5xl font-semibold ml-[25rem] mb-[5rem]'>GET YOURSELF CURED</p>
    <p className='text-7xl font-bold ml-[15rem] mb-[10rem]'>HOW CAN I HELP YOU</p>
    </div>
    <div className='flex flex-row ml-[40rem] gap-[3rem]'>
    <button onClick={handleHomeClick} className='text-3xl font-bold border border-white bg-white rounded-[3rem] px-[3rem] py-[1rem]'>Chat with Me</button>
    <button className='text-3xl text-red-500 font-bold border border-white bg-white px-[3rem] rounded-[3rem]'>Emergency</button>
    </div>
        </div>
    </>
  )
}

export default Home
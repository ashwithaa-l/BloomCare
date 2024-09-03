
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
function Register() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
const navigate=useNavigate();
const handleSignup = async () => {
  if (!username || !password ||!email) {
      return toast.error('Please fill in all fields');
  }
  try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}Patient/Register`, {
          username,
          password,
          email
      });

      if (res.status === 201) {
          console.log(res.data);
          document.cookie = `token=${res.data.message.token}`;
          toast.success('Registered Successful');
          navigate('/Esanjeevini');
      } else {
          toast.error('Signup Failed');
      }
  } catch (err) {
      toast.error(err.message);
      console.error(err.message);
  }
};
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
            <label className='text-5xl mr-[2rem] font-semibold'>Username:</label>
           <input onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Enter your name' className=' shadow-lg py-[1rem] text-3xl w-[33.5rem] rounded-[0.5rem]'></input></div>
            <div>
            <label className='text-5xl mr-[8rem] font-semibold '>Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' className=' shadow-lg py-[1rem] text-3xl mb-[4rem] w-[33.5rem] rounded-[0.5rem]'></input></div>
            <div>
            <label className='text-5xl font-semibold mr-[3rem]'>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password' className=' shadow-lg py-[1rem] text-3xl mb-[6rem] w-[33.5rem] rounded-[0.5rem]'></input></div>
        </form>
        <button onClick={(e)=>handleSignup()} className='text-3xl font-bold border border-black px-[3rem] py-[1rem] bg-black rounded-[3rem] ml-[55rem] text-white mb-[5rem]'>Register</button>
        <p className=' mb-[3rem] ml-[59rem] text-3xl font-semibold'>or</p>
       <div className='ml-[56rem] mb-[4rem]'><button className='text-blue border border-gray-500 rounded-[4rem] p-[0.5rem] text-4xl text-blue-300 bg-white'>Webcam</button></div>
       <div className='flex flex-row gap-[3rem] ml-[40rem]'>
        <p className='mt-[1rem] text-3xl font-semibold'>IF YOU HAVE AN ACCOUNT</p>
        <button onClick={handleRegisterClick} className='border border-black px-[3rem] py-[1rem] rounded-[3rem] bg-black text-white text-3xl'>Login</button>
        </div>
    </div>
    <Toaster/>
    </>
  )
}

export default Register
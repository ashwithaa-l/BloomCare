
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { TbScanEye } from 'react-icons/tb';
import registerbg from "../assets/register.png";

function Register() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
const navigate=useNavigate();

useEffect(()=>{
  const token = document.cookie.split('=')[0];
  if(token){
    navigate('/')
  }
},[navigate])

const handleSignup = async () => {
  if (!username || !password ) {
      return toast.error('Please fill in all fields');
  }
  try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}patient/signup`, {
          username,
          password,
      });

      if (res.status === 201) {
          console.log(res.data);
          document.cookie = `token=${res.data.message.token}`;
          toast.success('Registered Successful');
          navigate('/esanjeevini');
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
    <div className=' h-[100vh] bg-cover font-bold'
    style={{ backgroundImage: `url(${registerbg})`}}>
    <div className='h-[100vh] lg:w-[59%] w-full'>
           <div className='flex items-center justify-center h-full'>
              <div className='w-[38rem] h-[44rem] flex flex-col items-center text-center'>
                  <span className='text-[4rem] mb-1'>Register</span>
                  <span className='text-blue-900'>Get your account created here in a simpler way</span>
                  <div className='flex flex-col mt-[4rem]'>
                  <div className='flex gap-x-[2rem] items-center justify-center'>
                      <span className='text-3xl text-blue-900 font-bold'>Username  :</span>
                      <input
                        type='text'
                        placeholder='Enter your Username'
                        className='p-[1rem] rounded-xl'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                  </div>
                  <div className='flex mt-[4rem] p-[1rem] gap-x-[2rem] items-center justify-center'>
                      <span className='text-3xl text-blue-900 font-bold'>Password  :</span>
                      <input
                        type='password'
                        placeholder='Enter your password'
                        className='p-[1rem] rounded-xl'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  </div>
                  <button type='submit' onClick={handleSignup} className='text-3xl font-bold border border-black px-[3rem] py-[1rem] bg-black rounded-[3rem] text-white mt-[4rem]'>Register</button>
                  <hr className='h-[0.2rem]  w-[70%] mt-[2rem]'></hr>
                  <div className='flex flex-col items-center justify-center gap-y-[1rem] mt-[1rem]'>
                        <TbScanEye className='text-6xl text-blue-900'></TbScanEye>
                        <span className='text-blue-900'>Add Face</span>
                  </div>
                  <span className='mt-2'>Have an account ? <span className='text-blue-800  cursor-pointer ' onClick={()=>handleRegisterClick()}>Login</span></span>
              </div>
           </div>
        </div>
    </div>
    <Toaster/>
    </>
  )
}

export default Register
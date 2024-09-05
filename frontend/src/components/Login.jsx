/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { TbScanEye } from "react-icons/tb";
import loginbg from '../assets/login.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const token = document.cookie.split('=')[0];
    if(token){
      navigate('/')
    }
  },[navigate])

  const handleLogin = async (e) => {
    e.preventDefault();
    if ( !username || !password) {
      return toast.error('Please fill in all fields');
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}patient/login`, {
        username,
        password
      });

      if (res.status === 200) {
        console.log(res.data);
        document.cookie = `token=${res.data.message.token}`
        toast.success('Login Successful');
        navigate('/esanjeevini');
      } else {
        toast.error('Login Failed');
      }
    } catch (err) {
      toast.error('Login Failed');
      console.error(err.message);
    }
  };

  const handleRegisterClick = () => {
    navigate('/Register');
  };

  return (
    <>
      <div className=' h-[100vh] bg-cover font-bold' 
            style={{ backgroundImage: `url(${loginbg})` }}
>
        <div className='h-[100vh]  lg:w-[59%] w-full'>
           <div className='flex items-center justify-center h-full'>
              <div className='w-[38rem] h-[44rem] flex flex-col items-center text-center'>
                  <span className='text-[4rem] mb-1'>Login</span>
                  <span className='text-blue-900'>Get your account signed in a simpler way</span>
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
                  <button type='submit' onClick={handleLogin} className='text-3xl font-bold border border-black px-[3rem] py-[1rem] bg-black rounded-[3rem] text-white mt-[4rem]'>Login</button>
                  <hr className='h-[0.2rem]  w-[70%] mt-[2rem]'></hr>
                  <div className='flex flex-col items-center justify-center gap-y-[1rem] mt-[1rem]'>
                        <TbScanEye className='text-6xl text-blue-900'></TbScanEye>
                        <span className='text-blue-900'>Scan Face</span>
                  </div>                  <span className='mt-2'>Dont have an account ? <span className='  cursor-pointer text-blue-900' onClick={()=>handleRegisterClick()}>Register</span></span>

              </div>
           </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Login;

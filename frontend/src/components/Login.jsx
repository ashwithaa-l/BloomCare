/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      return toast.error('Please fill in all fields');
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}patient/login`, {
        username,
        email,
        password
      });

      if (res.status === 200) {
        console.log(res.data);
        document.cookie = `token=${res.data.message.token}`
        toast.success('Login Successful');
        navigate('/Home');
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
    <div className=''>
      <div className='bg-[url("login.png")] h-screen bg-cover'>
        <div className='pt-[10rem]'>
          <p className='font-bold text-8xl text-center mb-[3rem]'>Login</p>
          <p className='font-semibold text-3xl text-center mb-[2rem]'>Log in if account already exists</p>
        </div>
        <form className='flex flex-col items-center mt-[2rem] a' onSubmit={handleLogin}>
          <div className='mb-[2rem]'>
            <label className='text-5xl font-semibold mr-[1rem]'>Email:</label>
            <input
              type='email'
              placeholder='Enter your Email'
              className='shadow-lg py-[1rem] text-3xl w-[20rem] rounded-[0.5rem]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-[2rem]'>
            <label className='text-5xl font-semibold mr-[1rem]'>Username:</label>
            <input
              type='text'
              placeholder='Enter your Username'
              className='shadow-lg py-[1rem] text-3xl w-[20rem] rounded-[0.5rem]'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-[4rem]'>
            <label className='text-5xl font-semibold mr-[1rem]'>Password:</label>
            <input
              type='password'
              placeholder='Enter your Password'
              className='shadow-lg py-[1rem] text-3xl w-[20rem] rounded-[0.5rem]'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='text-3xl font-bold border border-black px-[3rem] py-[1rem] bg-black rounded-[3rem] text-white mb-[2rem]'>Login</button>
        </form>
        <p className='text-center mb-[1rem] text-3xl font-semibold'>or</p>
        <div className='flex justify-center mb-[2rem]'>
          <button className='text-blue border border-gray-500 rounded-[4rem] p-[1rem] text-2xl text-blue-300 bg-white'>Webcam</button>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-[1rem] text-3xl font-semibold'>IF YOU DON'T HAVE AN ACCOUNT</p>
          <button onClick={handleRegisterClick()} className='border border-black px-[3rem] py-[1rem] rounded-[3rem] bg-black text-white text-3xl mt-[1rem]'>Register</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;



import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate()

  useEffect(()=>{
    const token = document.cookie.split('=')[0];
    if(token){
      navigate('/')
    }
    else{
      navigate('/login')
    }
  },[navigate])
  
  return (
    <>
     <Outlet/>
    </>
  )
}

export default App;

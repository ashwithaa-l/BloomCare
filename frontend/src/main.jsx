import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Language from './components/Language.jsx'
import Home from './components/Home.jsx'
import ChatBot from './components/ChatBot.jsx'
import DoctorPage from './components/DoctorPage.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([
 {
        path:'',
        element:<Language/>
      },
      {
        path:'/Register',
        element:<Register/>
      },{
        path:'/Home',
        element:<Home/>
      },{
        path:'/Login',
        element:<Login/>
      },{
        path:'/ChatBot',
        element:<ChatBot/>
      },{
      path:'/DoctorPage',
      element:<DoctorPage/>
    }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

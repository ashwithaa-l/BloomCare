import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
// import Language from './components/Language.jsx'
// import Home from './components/Home.jsx'
// import ChatBot from './components/ChatBot.jsx'
// import DoctorPage from './components/DoctorPage.jsx'
import Esanjeevini from './components/Esanjeevini.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([
 {
        path:'',
        element:<Login/>
      },
      {
        path:'/Register',
        element:<Register/>
      },{
        path:'/Login',
        element:<Login/>
      },{
        path:'/esanjeevini',
        element:<Esanjeevini/>
      }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

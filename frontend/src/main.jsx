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
import Printer from './components/Printer.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'

const router=createBrowserRouter([
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/',
        element:<App></App>,
        children:[
          {
            path:'/',
            element:<Esanjeevini/>
          },
          {
            path:'/esanjeevini',
            element:<Esanjeevini/>
          },{
            path:'/printer',
            element:<Printer/>
          }
        ]
      }
    ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

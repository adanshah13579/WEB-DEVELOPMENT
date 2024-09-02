import React from 'react'
import ReactDOM from "react-dom/client"
import { StrictMode } from 'react'
import{RouterProvider,createBrowserRouter} from "react-router-dom"
import App from './router/App.jsx'

import Postlist from './component/postlist.jsx'
import Creatpost from './component/creatpost.jsx'


const router = createBrowserRouter([{
    
  path:"/",
  element:<App/>,
  children:[{path:"/",element:<Postlist/>},
    {path:"/creatpost",element:<Creatpost/>}
  ]
  
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

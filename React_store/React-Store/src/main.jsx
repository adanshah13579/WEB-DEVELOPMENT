import {  StrictMode } from "react";
import React from "react";
import ReactDOM from 'react-dom/client'

import App from "./router/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./router/Bag.jsx";
import Home from "./router/Home.jsx";
import {Provider} from 'react-redux'
import reactstore from "../store/index.js";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reactstore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);

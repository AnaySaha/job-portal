import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "./Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin";


  const router = createBrowserRouter([
    {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'register',
        element: <Register></Register>
      },

      {
        path: 'signin',
        element: <Signin></Signin>
      }
    ]
    },
    ]);
    
    export default router;
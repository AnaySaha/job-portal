import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "./Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";



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
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
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
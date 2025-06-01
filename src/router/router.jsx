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
import ApplyJob from "../JobApply/ApplyJob";
import MyApplications from "../JobApply/MyApplications/MyApplications";
import AddJob from "../AddJob/AddJob";
import MyPostedjob from "../AddJob/MyPostedjob";
import ViewApplications from "../pages/ViewApplications/ViewApplications";



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
        path: '/applyJob/:id',
        element: <PrivateRoute>
          <ApplyJob></ApplyJob>
        </PrivateRoute>
      },
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplications>
          
          </MyApplications></PrivateRoute>
      },

      {

        path: '/myPostedJob',
        element: <PrivateRoute><MyPostedjob></MyPostedjob></PrivateRoute>
      },

      {
        path: '/viewApplications/:job_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },

      {
        path: '/addJob',
        element: <PrivateRoute> <AddJob></AddJob></PrivateRoute>
      },

      {
        path: 'signin',
        element: <Signin></Signin>
      }
    ]
    },
    ]);
    
    export default router;
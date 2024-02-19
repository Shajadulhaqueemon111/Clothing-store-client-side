import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HomePage/Home";
import Login from "../Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoute></MainRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;
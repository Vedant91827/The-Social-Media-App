import React, { useContext } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {LeftBar , RightBar , Navbar} from "./components";
import { Navigate } from "react-router-dom";
import './style.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


function App() {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)

  // console.log(darkMode);

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>

      <div className={`theme-${darkMode ? "dark" : "light" }`}>
        <Navbar/>
          <div style={{display: "flex"}}>
            <LeftBar/>
            <div style={{flex:6}}>
            <Outlet/>
            </div>
            <RightBar/>
          </div>
      </div>
      </QueryClientProvider>
    )
  };

  const ProtectedRoute = ({children}) => {
    //if use is not logged in
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: ( <ProtectedRoute><Layout/></ProtectedRoute> ),
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

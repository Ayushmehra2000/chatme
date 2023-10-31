import './App.css';
import { SignUp } from './components/createaccount/createaccount';
import { Home } from './components/home/home';
import { Error404 } from './components/Errorhandling/error';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from './components/loginorlogout/login';
import { useUsersValue } from './Context/userContext';
import { useEffect } from 'react';

function App() {
  const {isLogin, setIslogin} = useUsersValue()

  useEffect(()=>{
    const check = window.localStorage.getItem("islogin");
    if(check === "true"){
      setIslogin(true);
    }
  },[])
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Error404 />,
      children: [
        {path: '', element: isLogin? <Home />:<Navigate to="/login" /> },
        {path: 'signup', element: <SignUp /> },
        {path: 'login', element: <Login /> },
      ],
    },
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

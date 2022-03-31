import React, { useEffect, useState } from "react";
import {
  BrowserRouter
} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import Navbar from "./UI/Navbar/Navbar";




export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
} 
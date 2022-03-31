import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./UI/Navbar/Navbar";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  )
} 
import React from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";
import {
    Routes,
    Route,
    Outlet
  } from "react-router-dom";


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Outlet />
        </div>
    );
};

export default AppRouter;
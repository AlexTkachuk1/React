import React, { useContext } from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";
import {
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        <div>
            {isAuth
                ? <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.component />}
                            key={route.path}
                        />
                    )}
                </Routes>

                : <Routes>
                    {
                        publicRoutes.map(route =>
                            <Route
                                path={route.path}
                                element={<route.component />}
                                key={route.path}
                            />
                        )
                    }
                </Routes>
            }
            {/* <Route path="/" element={<Home />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="posts/:id" element={<PostIdPage />} />
                <Route path="posts" element={<Posts />} />
                <Route path="*" element={<NotFound />} /> */}
            <Outlet />
        </div>
    );
};

export default AppRouter;
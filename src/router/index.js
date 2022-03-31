import About from "../pages/About"
import Home from "../pages/Home"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import PostIdPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"

export const privateRoutes = [
    {path: "/about", component: About, exact: false},
    {path: "/", component: Home, exact: false},
    {path: "*", component: NotFound, exact: false},
    {path: "posts/:id", component: PostIdPage, exact: true},
    {path: "posts", component: Posts, exact: true},
]

export const publicRoutes = [
    {path: "*", component: Login, exact: false},
]
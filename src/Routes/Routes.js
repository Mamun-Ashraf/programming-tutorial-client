import { createBrowserRouter } from "react-router-dom";
import Blog from '../Pages/Blog';
import Main from '../layout/Main';
import Courses from "../layout/Courses/Courses";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <p>This route not found</p>
    }
])
import { createBrowserRouter } from "react-router-dom";
import CourseDetails from '../Pages/CourseDetails';
import Home from '../Pages/Home';
import Main from '../layout/Main';
import Blog from "../Pages/Blog";
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
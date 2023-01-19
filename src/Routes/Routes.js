import { createBrowserRouter } from "react-router-dom";
import Blog from '../Pages/Blog';
import CourseDetails from '../layout/Courses/CourseDetails';
import Main from '../layout/Main';
import Courses from "../layout/Courses/Courses";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
                    }
                ]
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
import { createBrowserRouter } from "react-router-dom";
import Blog from '../Pages/Blog';
import Main from '../layout/Main';
import Courses from "../layout/Courses/Courses";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import CourseDetailsCard from "../layout/Courses/CourseDetailsCard";
import CourseSummaryCard from "../layout/Courses/CourseSummaryCard";

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
                        path: '/courses',
                        element: <CourseSummaryCard></CourseSummaryCard>,
                        loader: () => fetch('http://localhost:5000/courses')
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetailsCard></CourseDetailsCard>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
                    }
                ]
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
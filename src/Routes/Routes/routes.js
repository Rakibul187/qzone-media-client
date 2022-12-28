import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Home from "../../pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
        ]
    },
    {
        path: '/login', element: <Login></Login>
    },
    {
        path: '/register', element: <Register></Register>
    }
])
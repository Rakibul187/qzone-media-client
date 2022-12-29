import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Media from "../../pages/Media/Media";
import Message from "../../pages/Message/Message";
import PostDetails from "../../Shared/Posts/PostDetails";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/posts')
            },
        ]
    },
    {
        path: '/login', element: <Login></Login>
    },
    {
        path: '/register', element: <Register></Register>
    },
    {
        path: '/media', element: <Media></Media>,
        loader: () => fetch('http://localhost:5000/posts')
    },
    {
        path: '/message', element: <Message></Message>
    },
    {
        path: '/about', element: <About></About>
    },
    {
        path: '/postdetails/:id', element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/postdetails/${params.id}`)
    }
])
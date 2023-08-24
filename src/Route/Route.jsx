import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Docs from "../Docs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/docs",
                element: <Docs></Docs>,
            },
            
        ]
    }
])
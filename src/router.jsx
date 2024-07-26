import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Loginpage from './pages/Loginpage';
// import Surveypage from './pages/surveypage';
// import Mainpage from './pages/mainpage';
// import Chatpage from './pages/chatpage';


const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            { path:"/", element:<Loginpage/>} ,
            // { path: "/survey", element: <Surveypage /> },
            // { path: "/main", element: <Mainpage /> },
            // { path: "/chat", element: <Chatpage /> },
        ],
    },
]);

export default router;
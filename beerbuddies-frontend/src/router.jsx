import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./components/Home";
import BuddiesPage from "./pages/BuddiesPage"
import UserProfilePage from "./pages/UserProfilePage"
import BeerGarden from "./pages/BeerGarden"

const router = createHashRouter ([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {   
                index: true,
                element: <App />
            }, 
            {
                path: "login",
                element: <Home />
            },
            {
                path: "/BuddiesPage",
                element: <BuddiesPage />
            },
            {
                path: "/BeerGarden",
                element: <BeerGarden />
            },
            {
                path: "/UserProfilePage",
                element: <UserProfilePage />
            }
        ]
    }
])

export default router;
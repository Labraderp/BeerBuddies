// import { createBrowserRouter, createHashRouter } from "react-router-dom";
// import App from "./App";
// import ErrorPage from "./pages/ErrorPage";
// import Home from "./components/Home";
// import BuddiesPage from "./pages/BuddiesPage"
// import UserProfilePage from "./pages/UserProfilePage"
// import BeerGarden from "./pages/BeerGarden"

// const router = createHashRouter ([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children: [
//             {   
//                 index: true,
//                 element: <App />
//             }, 
//             {
//                 path: "login",
//                 element: <Home />
//             },
//             {
//                 path: "/BuddiesPage",
//                 element: <BuddiesPage />
//             },
//             {
//                 path: "/BeerGarden",
//                 element: <BeerGarden />
//             },
//             {
//                 path: "/UserProfilePage",
//                 element: <UserProfilePage />
//             }
//         ]
//     }
// ])

// export default router;

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./components/Home";
import BuddiesPage from "./pages/BuddiesPage";
import UserProfilePage from "./pages/UserProfilePage";
import BeerGarden from "./pages/BeerGarden";
import RestaurantPage from "./pages/RestaurantPage";
import BeerList from "./pages/BeerList"
import BeerPage from "./pages/BeerPage";
import RestaurantList from "./pages/RestaurantList";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Home />} />
      <Route path="/BuddiesPage" element={<BuddiesPage />} />
      <Route path="/BeerGarden" element={<BeerGarden />} />
      <Route path="/UserProfilePage" element={<UserProfilePage />} />
      <Route path="/RestaurantPage" element={<RestaurantPage/>} />
      <Route path="/RestaurantPage/BeerList" element={<BeerList/>}/>
      <Route path="/BeerPage" element={<BeerPage/>}/>
      <Route path="/RestaurantList" element={<RestaurantList/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default router;

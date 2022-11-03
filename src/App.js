import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import WorkSpace from "./components/Project/WorkSpace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/workSpace",
    element: <WorkSpace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

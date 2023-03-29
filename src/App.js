import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import WorkSpace from "./components/Project/WorkSpace";
import MainContent from "./components/MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <MainContent />,
      },
      {
        path: "/home/workSpace/:id",
        element: <WorkSpace />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

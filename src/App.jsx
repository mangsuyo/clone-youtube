import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found 404 </div>,
    children: [
      {
        index: true,
        element: <div>This is default Component</div>,
      },
      {
        path: "/videos",
        element: <div>This is video Page</div>,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

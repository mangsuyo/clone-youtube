import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import SearchVideosPage from "./pages/SearchVideosPage";
import SearchPage from "./pages/SearchVideosPage";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found 404 </div>,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "/videos/:videoId",
        element: <VideoDetail />,
      },
      {
        path: "/search/:keyword",
        element: <SearchVideosPage />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

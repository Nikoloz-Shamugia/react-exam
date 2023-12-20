import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./components/Todo";
import Card from "./components/Card";
import Data from "./components/Data";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/todo",
    element: <Todo/>,
  },
  {
    path: "/card",
    element: <Card/>,
  },
  {
    path: "/data",
    element: <Data/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

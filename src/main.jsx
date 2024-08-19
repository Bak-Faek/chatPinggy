import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/userContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Chat from "./components/chat/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chatbox",
    element: <Chat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

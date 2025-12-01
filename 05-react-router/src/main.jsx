import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


// import { StrictMode } from "react"
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import App from "./App";
// import Profile from "./Profile";
// import Spinach from "./Spinach";
// import Popeye from "./Popeye";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//     children: [
//       { path: "spinach", element: <Spinach /> },
//       { path: "popeye", element: <Popeye /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import App from "./App";
// import Profile from "./Profile";
// import DefaultProfile from "./DefaultProfile";
// import Spinach from "./Spinach";
// import Popeye from "./Popeye";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//     children: [
//       { index: true, element: <DefaultProfile /> },
//       { path: "spinach", element: <Spinach /> },
//       { path: "popeye", element: <Popeye /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import App from "./App";
// import Profile from "./Profile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import App from "./App";
// import Profile from "./Profile";
// import ErrorPage from "./ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import routes from "./routes";

// const router = createBrowserRouter(routes);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );


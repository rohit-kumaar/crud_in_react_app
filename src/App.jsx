import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading.jsx";
const Home = lazy(() => import("./components/Home.jsx"));
const Create = lazy(() => import("./components/Create.jsx"));
const Update = lazy(() => import("./components/Update.jsx"));
const Read = lazy(() => import("./components/Read.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/create",
    element: (
      <Suspense fallback={<Loading />}>
        <Create />
      </Suspense>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Update />
      </Suspense>
    ),
  },
  {
    path: "/read/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Read />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

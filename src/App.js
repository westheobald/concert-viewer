import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import SearchPage from "./Pages/SearchPage";
import ConcertPage from "./Pages/ConcertPage";
import EditPage from "./Pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/concert/:id",
    element: <ConcertPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

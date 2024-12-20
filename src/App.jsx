import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutUsLayout from "./layouts/AboutUsLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HikoiPage from "./pages/HikoiPage";
import EventsPage from "./pages/EventsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hikoi",
        element: <HikoiPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about-us",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

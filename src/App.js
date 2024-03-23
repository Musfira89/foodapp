import React from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation/Navigation";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Error from "./components/Body/Error";
import Contact from "./components/Contact/Contact";

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import RestMenu from "./components/Body/RestMenu";

const AppLayout = () => {
  return (
    <>
      <Navigation />
       <Outlet/>
       <Footer/>
   
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Aboutus",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/rest/:id",
        element: <RestMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

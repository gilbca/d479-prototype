import RootLayout from "./RootLayout";
import Home from "../pages/Home";
import Cuisine from "../pages/Cuisine";
import Lodging from "../pages/Lodging";
import Entertainment from "../pages/Entertainment";
import Locations from "../pages/Locations";
import Transportation from "../pages/Transportation";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/cuisine", element: <Cuisine /> },
      { path: "/lodging", element: <Lodging /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/locations", element: <Locations /> },
      { path: "/transportation", element: <Transportation /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

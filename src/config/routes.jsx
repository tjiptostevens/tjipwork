import About from "../website/about";
import Content from "../website/content";
import Home from "../website/home";
import Login from "../website/login";

const rute = {
  dash: [
    //   {
    //     path: "/",
    //     element: <Dash />,
    //   },
  ],
  web: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Content />,
    },
    {
      path: "/about",
      element: <About />,
    },
    // {
    //   path: "/d/*",
    //   element: <Dashboard />,
    // },
    // {
    //   path: "*",
    //   element: <Home />,
    // },
  ],
};

export default rute;

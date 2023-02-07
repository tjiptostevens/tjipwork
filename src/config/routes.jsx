import About from "../website/about";
import Contact from "../website/contact";
import Content from "../website/content";
import Home from "../website/home";
import Login from "../website/login";
import Work from "../website/work";

const rute = {
  dash: [
    //   {
    //     path: "/",
    //     element: <Dash />,
    //   },
  ],
  web: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Content />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "work",
      element: <Work />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    // {
    //   path: "/d/*",
    //   element: <Dashboard />,
    // },
    // {
    //   path: "/*",
    //   element: <Home />,
    // },
  ],
};

export default rute;

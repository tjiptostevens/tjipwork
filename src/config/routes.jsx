import Home from "../website/home";
import Login from "../website/login";

const routes = {
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
    //   {
    //     path: "/d/*",
    //     element: <Dashboard />,
    //   },
    {
      path: "*",
      element: <Home />,
    },
  ],
};

export default routes;

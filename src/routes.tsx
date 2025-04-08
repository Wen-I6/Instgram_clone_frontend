import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import UserProfile from "./pages/home/components/IGPost/UserProfile";
import Following from "./pages/following";
import NotFound from "./pages/notFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/account/:account",
    element: <UserProfile />,
    children: [],
  },
  {
    path: "/following",
    element: <Following />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
];

export default routes;

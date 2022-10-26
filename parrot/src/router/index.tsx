import { createBrowserRouter } from "react-router-dom";
import NewPost from "../components/NewPost";
import Home from "../pages/Home";
import Usuario from "../pages/Usuario";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/usuario",
    element: <Usuario />,
  },
  {
    path: "/newpost",
    element: <NewPost />,
  }

]);

export default router;

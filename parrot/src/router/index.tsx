import { createBrowserRouter } from "react-router-dom";
import Perfil from "../components/perfil"
import Home from "../pages/home";
import NewPost from "../components/newpost";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/newpost",
    element: <NewPost />,
  }

]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import NewPost from "../components/NewPost";
import Perfil from "../components/Perfil"
import Home from "../pages/Home";

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

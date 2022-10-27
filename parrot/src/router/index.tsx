import { createBrowserRouter } from "react-router-dom";
import Perfil from "../components/Perfil"
import Home from "../pages/Home";
import NewPost from "../components/newpost";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

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
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/login",
    element: <Login />
  }

]);

export default router;

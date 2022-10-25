// import NavBar from "../components/Navbar"
// import NewPost from "../components/newpost"
// import faker from '../api-test.json'
// import Post from "../components/post"

// type HomeProps = { router }

// const Home = (props: HomeProps) => {

//   const { Aptos } = faker


//   return (
//     <div>
//       {/* //componente do navbar */}
//       <NavBar />
//       {/* //componente de criação de post */}
//       <NewPost/>
//       {/* //componente para mostrar o feed de posts */}
//       {Aptos.map((apto)=>(
//         <Post key={apto.id} id={apto.id} nome={apto.nome} ap={apto.ap} timestamp={apto.timestamp} post={apto.post}/>
//       ))}
//     </div>
//   )
// }

// export default Home

import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

]);

export default router;

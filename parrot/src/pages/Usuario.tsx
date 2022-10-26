import NavBar from "../components/Navbar"
// import NewPost from "../components/NewPost"
import faker from '../api-test.json'
import Post from "../components/post"
import Perfil from "../components/Perfil"

type UsuarioProps = {}

const Usuario = (props: UsuarioProps) => {

  const { Aptos } = faker


  return (
    <div>
      {/* //componente do navbar */}
      <NavBar />
      {/* //componente de criação de perfil */}
      <Perfil/>
      {/* //componente para mostrar o feed de posts */}
      {Aptos.map((apto)=>(
        <Post key={apto.id} id={apto.id} nome={apto.nome} ap={apto.ap} timestamp={apto.timestamp} post={apto.post}/>
      ))}
    </div>
  )
}

export default Usuario
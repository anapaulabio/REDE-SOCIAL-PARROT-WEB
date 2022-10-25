import { PostDetail } from './Post.style'
import { Link } from 'react-router-dom';
import icon from "../../img/icon.png";


type PostProps = {
  id: number,
  nome: string,
  ap: number,
  timestamp: string,
  post: string
}


const Post = (props: PostProps) => {


  return (
    <PostDetail className='container'>
      <div className="row align-items-center">
      <img src={icon} alt="foto de perfil" className=' col-lg-2 col-md-2 col-sm-2 col-3' />
      <div className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9 '>
          <Link to={`/${props.id}`}>{props.nome}-{props.ap}</Link>
          <p>{props.timestamp}</p> <br />
          <p className='post'>{props.post}</p>
      </div>
      </div>
    </PostDetail>
  )
}

export default Post
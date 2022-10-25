import { CreatePost, PostForm } from './NewPost.style'
import icon from '../../img/icon.png'

type NewPostProps = {}

const NewPost = (props: NewPostProps) => {




  return (
    <CreatePost className='row'>
      <img src={icon} alt="foto de avatar" className='col-lg-2 col-md-2 col-sm-2 col-3' />

        <PostForm className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9'>
         <label htmlFor="post"></label>
         <textarea name='post'/>
         <input type="submit" value='publicar'/>
        </PostForm>

    </CreatePost>
  )
}

export default NewPost
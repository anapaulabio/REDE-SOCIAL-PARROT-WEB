import { DivPerfil, PerfilImg } from './Perfil.style'
import icon from '../../img/icon.png'
import 'bootstrap/dist/css/bootstrap.min.css'

type PerfilProps = {}

const Perfil = (props: PerfilProps) => {

  return (
    <PerfilImg className='row'>
      <img src={icon} alt="foto de avatar" className='col-lg-2 col-md-2 col-sm-2 col-3' />

        <DivPerfil className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9'>
         <span>
         <h2>name sobrenome</h2>
         <p>'apto'+ number</p>
         <p>email</p>
         </span>


         <input type="submit" value='publicar'/>
        </DivPerfil>

    </PerfilImg>
  )
}

export default Perfil
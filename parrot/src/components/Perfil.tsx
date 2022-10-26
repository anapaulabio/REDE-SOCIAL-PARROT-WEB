import { DivPerfil, PerfilImg } from './Perfil.style'
import icon from '../../img/icon.png'
import 'bootstrap/dist/css/bootstrap.min.css'

type PerfilProps = {}

const Perfil = (props: PerfilProps) => {

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
  <div className="row bg-success text-center">
    <div className="col">NAV</div>
  </div>
  <div className="row flex-grow-1">
    <div className="col-md-6 offset-md-3 border-end border-start p-0">
      <div className="border-bottom px-2 py-5">
        <div className="row">
          <div className="col-3">images</div>
          <div className="col d-flex flex-column">

            <div className="border mb-3">campo</div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">botão</button>
            </div>
          </div>
          <div className="col-3">buttom</div>
        </div>
      </div>
      <div className="border-bottom p-4">publicação1</div>
      <div className="border-bottom p-4">publicação2</div>
      <div className="border-bottom p-4">publicação3</div>
    </div>
  </div>
</div>

//     <PerfilImg className='row'>
//       <img src={icon} alt="foto de avatar" classNameName='col-lg-2 col-md-2 col-sm-2 col-3' />

//         <DivPerfil className='d-flex flex-column col-lg-8 col-md-8 col-sm-10 col-9'>
//          <span>
//          <h2>name sobrenome</h2>
//          <p>'apto'+ number</p>
//          <p>email</p>
//          </span>


        
//         </DivPerfil>
//  <input type="submit" value='publicar'/>
//     </PerfilImg>
  )
}

export default Perfil
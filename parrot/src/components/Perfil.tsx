import { Avatar, Titulo, Editar } from "./Perfil.style";
import icon from "../../img/icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

type PerfilProps = {};

const Perfil = (props: PerfilProps) => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-end border-start p-0">
          <div className="border-bottom">
            <div className="d-flex">
              <div className="p-4">
                <Avatar>
                  <img src={icon} />
                </Avatar>
              </div>
              <div className="p-2">
                <Titulo>Nome Sobrenome</Titulo>
                <p>Apto 55</p>
                <p>user@mail.com</p>

                <div>publicaçoes "00"</div>
              </div>

              <div>
                <Editar>editar perfil</Editar>
              </div>
            </div>
          </div>
          <div className="border-bottom p-4">publicação1</div>
          <div className="border-bottom p-4">publicação2</div>
          <div className="border-bottom p-4">publicação2</div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;

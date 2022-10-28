import { Avatar, Titulo, Editar, Texto } from "./Perfil.style";
import icon from "../../img/icon.png";
import parrotwhite from "../../img/parrotwhite.png";
import "bootstrap/dist/css/bootstrap.min.css";

type PerfilProps = {};

const Perfil = (props: PerfilProps) => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-end border-start p-0">
          <div className="border-bottom">
            <div className="d-flex">
              <div className="col-2 p-4">
                <Avatar>
                  <img src={icon} />
                </Avatar>
              </div>
              <div className="col-7 p-3">
                <Titulo>Nome Sobrenome</Titulo>
                <Texto>Apto 55</Texto>
                <Texto>user@mail.com</Texto>
                <Texto>publicaçoes "00"</Texto>
              </div>
              <div className="col-3">
                <Editar>editar perfil</Editar>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="p-5"><div><h3>você ainda nao fez nenhuma publicação :( </h3>
    <img src={parrotwhite} className="rounded mx-auto d-block" />
    </div></div>
    </div>
  );
};
              

export default Perfil;

import "./Box.css";
import Button from "../components/Button";
import Input from "./Input";
import { Link } from "react-router-dom";

function BoxLogin() {
  return (
    <div className="bg-img">
      <div className="box-container">
        <div className="container-itens">
          <div className="logo">
            <img src="./img/logo1.png" alt="" />
          </div>

          <h1>Login</h1>
          <form className="box-form" action="">
          <Input name="email" label="" type="email" placeholder="email"/>
          <Input name="senha" label="" type="password" placeholder="senha"/>

          <Button text="entrar" type={"submit"} value={""}/>
          </form>
          <Link className="Link-cadastro" to="/Cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default BoxLogin;
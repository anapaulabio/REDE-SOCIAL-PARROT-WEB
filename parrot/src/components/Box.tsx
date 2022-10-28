import "./Box.css";
import axios from "axios";
import Button from "../components/Button";
import Input from "./Input";
import { FormEvent, useState } from "react";
import { cadastroUsuario } from "../services/CadastroUsuarios";

function Box() {
  const [name, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [apartment, setApartment] = useState<number>();
  const [linkdafoto, setLinkFoto] = useState<string>("");
  
  const cadastro = async (event: FormEvent) =>{
    event.preventDefault();
    

    const payload = {
      name,
      email,
      password,
      apartment,
      linkdafoto, 
    };

    try {
      const response = await cadastroUsuario(payload);

      return alert ("Cadastrado com sucesso");
    } catch (error) {
      console.log("deu um erro", error)
    }

  };

  return (

    

    <div className="bg-img">
      <div className="box-container">
        <div className="container-itens">
          <div className="logo">
            <img src="./img/logo1.png" alt="" />
          </div>

          <h1>Cadastro</h1>
          <form className="box-form" onSubmit={cadastro}>
            <input name="nome" value={name} onChange={(event) => setNome(event.target.value)} type="text" placeholder="nome"/>
            <input name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="email"/>
            <input name="senha" value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="senha"/>
            <input name="senha" value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="confirmar senha"/>
            <input name="ap" value={apartment} onChange={(event) => setApartment(Number(event.target.value))} type="number" placeholder="unidade/apartamento"/>
            <input name="link" value={linkdafoto} onChange={(event) => setLinkFoto(event.target.value)} type="text" placeholder="link da foto"/>

            <Button type ="submit" value="submit" text="entrar"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Box;

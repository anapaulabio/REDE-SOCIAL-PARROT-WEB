import "./Box.css";
import Button from "../components/Button";
import Input from "./Input";
import { FormEvent, useState } from "react";
import { login } from "../services/login";
import {useDispatch} from "react-redux"
import { setUser } from "../store/modules/user";
import { Link } from "react-router-dom";

function BoxLogin() {

  const[email, setEmail] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const submit = async (event:FormEvent)=>{
    event.preventDefault();

    const payload = {
      email,
      password
    }

    try {
      const response = await login(payload);
      console.log(response.data)

      dispatch(setUser({
        token: response.data,
        email,
        IndexId: response.data,
        name: response.data,
        apartment: response.data,
      }))

      alert ("LOGADO")
    } catch (error) {
      alert ("Algo Deu Errado")

      console.log("deu um erro", error)

    }
  }

  return (
    <div className="bg-img">
      <div className="box-container">
        <div className="container-itens">
          <div className="logo">
            <img src="./img/logo1.png" alt="" />
          </div>

          <h1>Login</h1>
          <form className="box-form" onSubmit={submit}>
            <input name="email" type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input name="senha" type="password" placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)}/>

            <Button type="submit" value="submit" text="entrar"/>

            <Link to="/home"><p>Feed</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BoxLogin;
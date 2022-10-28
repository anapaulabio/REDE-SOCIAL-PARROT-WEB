import api from "./api";

interface UsuariosPayload{
    name: string;
    email:string;
    password:string;
    apartment:number | undefined;
    linkdafoto: string;
}

export function cadastroUsuario(payload:UsuariosPayload){
    return api.post("/cadastro",payload);
}


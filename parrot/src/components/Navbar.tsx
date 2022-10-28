import {Nav,Sair,SpanOla,LogoImg} from "./Navbar.style"
import logo from "../../img/logo.png"
import {useSelector} from "react-redux"
import { RootStore } from "../store"
import { useJwt } from "react-jwt";

function Navbar(){
    const user = useSelector((store: RootStore) => store.useReduce );
    return(
        <Nav>
            <LogoImg src={logo} alt="logo"/>
            <div>
                <SpanOla>Olá, <SpanOla>{user.email} | </SpanOla></SpanOla>      
                <Sair>sair</Sair>
            </div>             
        </Nav>     
    )    
}

export default Navbar;
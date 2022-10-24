import {Nav,Sair,SpanOla,LogoImg} from "./Navbar.style"
import logo from "../../img/logo.png"

function Navbar(){
    return(
        <Nav>
            <LogoImg src={logo} alt="logo"/>
            <div>
                <SpanOla>Olá, <SpanOla>usuário | </SpanOla></SpanOla>      
                <Sair>sair</Sair>
            </div>             
        </Nav>     
    )    
}

export default Navbar;
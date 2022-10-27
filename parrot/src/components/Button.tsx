import {ButtonHTMLAttributes} from "react";
import{ButtonForm} from "./Button.style"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    type: "submit" | "reset" | "button" ;
    value: string;
    text: string;
}


function Button ({type="submit", value="submit", text}:ButtonProps){
    return(
        <ButtonForm type={type} value={value}>{text}</ButtonForm>
    )
    
}


export default Button;



import{ButtonForm} from "./Button.style"

type ButtonProps = {
    text: string;
}


function Button(props:ButtonProps){
    return(
        <ButtonForm>{props.text}</ButtonForm>
    )
    
}


export default Button;



import React, { FC, InputHTMLAttributes} from "react";
import "./Input.css";

type onChangeProps ={
    
} 

interface InputProps extends InputHTMLAttributes<HTMLElement> {
    name: string;
    label: string;
    placeholder: string;
    value:string;
    type: string;
    onChange:{};
}

const Input: FC<InputProps> = ({name, placeholder, type,value,Onchange, ...rest}) => {
    return (
        <div className="input">
            <input id={name} placeholder={placeholder} type = {type} value={value} Onchange={Onchange} {...rest}></input>
        </div>
    );
};

export default Input
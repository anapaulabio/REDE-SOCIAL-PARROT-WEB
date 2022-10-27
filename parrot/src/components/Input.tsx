import React, { FC, InputHTMLAttributes} from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
    name: string;
    label: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({name, label, placeholder, ...rest}) => {
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input id={name} placeholder={placeholder} {...rest}></input>
        </div>
    );
};

export default Input
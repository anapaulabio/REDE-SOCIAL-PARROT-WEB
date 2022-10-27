import 'bootstrap/dist/css/bootstrap.min.css'
import "./Box.css";
import Button from "../components/Button";
import Input from './Input';


function Box() {
    return(
        <div className="box-container">
            <div className="container-itens">
                <div className='logo'>
                <img src="./img/logo1.png" alt="" />
                </div>

                <h1>Cadastro</h1>
                <Input/>

            </div>
        </div>
    )
}

export default Box;
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Box.css";
import Button from "../components/Button";


function Box() {
    return(
        <div className="container">
            <div className="container-itens">
                <div className='logo'>
                <img src="./img/logo1.png" alt="" />
                </div>

                <h1>Login</h1>

                {/* <div><label htmlFor="email" className="form-label"></label>
                <input
                type="text"
                className="form-control"
                placeholder="email"
                id="email"/>

                <label htmlFor="senha" className="form-label"></label>
                <input
                type="text"
                className="form-control"
                placeholder="senha"
                id="senha"/> 
                </div>   */}
                            
            </div>
        </div>
    )
}

export default Box;
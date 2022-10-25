import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { IconImg } from "./feed.style";
import icon from "../../img/icon.png";

function Feed() {
  return (
    <div>
      <Navbar />
      

      <div className="h-100 row text-center">
         
        <div className="p-0 h-100 col-md-6 offset-md-3 border border-dark">
          <div className="d-flex border-bottom border border-dark  p-4">
            <div className="px-3">
              <IconImg src={icon} alt="icon" />
            </div>

            <div className="col-10 p-2 ">
              <textarea
                className="form-control border-success"
                placeholder="comentarios"
              ></textarea>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn me-md-2 m-4 border border-dark"
                  type="button"
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default Feed;

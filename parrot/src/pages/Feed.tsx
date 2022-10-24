import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { IconImg } from "./feed.style";
import icon from "../../img/icon.png";

function Feed() {
  return (
    <div>
      <Navbar />

      <div className="row text-center">
        {/* ******** */}
        <div className="col-3 border border-dark"></div>
        {/* ******** */}
        <div className="col-md-6 d-flex border border-dark p-4">
          <div className="p-3">
            <IconImg src={icon} alt="icon" />
          </div>

          <div className="col-10 p-3 ">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
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
        {/* ******** */}
        <div className="col-3 border border-dark"></div>
        {/* ******** */}
      </div>
    </div>
  );
}

export default Feed;

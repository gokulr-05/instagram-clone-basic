import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./galleryitem.css";
import { useContext } from "react";
import ctx from "../../store/context";
import Modal3 from "./modal/Modal3";

const GalleryItem = ({ pic, likes, comments, id }) => {
  let ctx1 = useContext(ctx);

  let onClickHandler = (id) => {
    ctx1.setShowModalId(id);
    ctx1.setShowModal(true);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div>{ctx1.showModal && <Modal3 />}</div>,
        document.getElementById("modalID")
      )}
      <div
        className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket "
        onClick={() => {
          onClickHandler(id);
        }}
      >
        <div
          className="gallery-img-bucket-1"
          style={{ height: "100%", width: "100%", cursor: "pointer" }}
        >
          <div>
            <div className="overlay-text text-white">
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-heart "></i>
                  <h5 className="m-0">{likes}</h5>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-comment"></i>
                  <h5 className="m-0">{comments}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
          <img src={pic} className="gallery-img " alt="pic" />
        </div>
      </div>
    </Fragment>
  );
};

export default GalleryItem;

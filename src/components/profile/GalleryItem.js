import React from "react";
import "./galleryitem.css";
import comment from "../../assets/images/comment.svg";

const GalleryItem = ({ pic, likes, comments }) => {
  let mouseOverHandler = (e) => {
    console.log(likes);
  };

  return (
    <div
      onMouseOver={mouseOverHandler}
      className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket "
    >
      <div
        className="gallery-img-bucket-1"
        style={{ height: "100%", width: "100%" }}
      >
        <div>
          <div className="overlay-text text-white">
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-heart "></i>
                <h5 className="m-0">{likes}</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i class="fa-solid fa-comment"></i>
                <h5 className="m-0">{comments}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
        <img src={pic} className="gallery-img " alt="pic" />
      </div>
    </div>
  );
};

export default GalleryItem;

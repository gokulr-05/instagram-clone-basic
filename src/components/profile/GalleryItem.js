import React from "react";
import "./galleryitem.css";

const GalleryItem = ({ pic }) => {
  return (
    <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
      <img
        src={pic}
        className="gallery-img img-fluid1 img-thumbnail1"
        alt="pic"
      />
    </div>
  );
};

export default GalleryItem;

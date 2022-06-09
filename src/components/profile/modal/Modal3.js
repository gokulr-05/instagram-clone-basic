import React from "react";
import "./modal3.css";
import ctx from "../../../store/context";
import { useContext } from "react";
import pic1 from "../../../assets/images/photo1.jpeg";
import pic2 from "../../../assets/images/photo2.jpeg";
import pic3 from "../../../assets/images/photo3.jpeg";
import pic4 from "../../../assets/images/photo4.jpeg";
import pic5 from "../../../assets/images/photo5.jpeg";
import pic6 from "../../../assets/images/photo6.jpeg";

const Modal3 = () => {
  let pics = [pic1, pic2, pic3, pic4, pic5, pic6];
  let ctx1 = useContext(ctx);

  let hideModalHandler = () => {
    ctx1.setShowModal(false);
  };

  let modalid = ctx1.showModalId;

  let modalData = ctx1.modal.filter((val) => {
    return val.id.toString() === ctx1.showModalId.toString();
  });

  console.log("filtered modal data=", modalData);

  return (
    <div>
      <div className="overlay-text-app d-flex align-items-center justify-content-center">
        {/* <h1 className="text-black ">overlay text</h1>
        <h1>{ctx1.showModalId}</h1> */}
        <img
          src={pics[parseInt(ctx1.showModalId) - 1]}
          className="modal-img"
          alt="modal"
        />
      </div>
      <div className="overlay-app" onClick={hideModalHandler}></div>
    </div>
  );
};

export default Modal3;

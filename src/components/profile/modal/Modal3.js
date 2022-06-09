import React from "react";
import "./modal3.css";
import ctx from "../../../store/context";
import { useContext } from "react";
import user from "../../../assets/images/user.jpg";
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
  let username1 = ctx1.username;

  let [modalData] = ctx1.modal.filter((val) => {
    return val.id.toString() === ctx1.showModalId.toString();
  });

  let date = modalData.date;

  let location = modalData.location;
  let des = modalData.description;
  let week = modalData.week;
  console.log("modalData=", modalData);

  console.log("filtered modal data=", modalData);

  return (
    <div>
      <div className="overlay-text-app d-flex align-items-center justify-content-center">
        <div className="row row-1">
          <div className="col-8 column-1">
            <img
              src={pics[parseInt(ctx1.showModalId) - 1]}
              className="modal-img"
              alt="modal"
            />
          </div>
          <div className="col-4 column-1 overflow">
            <div className="row loc-row-1 py-2">
              <div className="col-2 m-0 p-0 d-flex align-items-center justify-content-end">
                <img
                  src={user}
                  alt="user"
                  className="text-center modal-user-img-1"
                />
              </div>
              <div className="col-10 ">
                <h6 className="p-0 m-0">{username1}</h6>
                <p style={{ fontSize: "13px" }} className="p-0 m-0">
                  {location}
                </p>
              </div>
            </div>
            <div className="row loc-row-2 py-4">
              <div className="col-2 m-0 p-0 d-flex align-items-start justify-content-end">
                <img
                  src={user}
                  alt="user"
                  className="text-center modal-user-img-1"
                />
              </div>
              <div className="col-10 ">
                <h6 className="p-0 m-0">{username1}</h6>
                <p className="p-0 m-0" style={{ lineHeight: "1.2" }}>
                  {des}
                </p>
                <p className="text-muted pt-2" style={{ fontSize: "13px" }}>
                  {week}
                </p>
              </div>
            </div>

            <div className="px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-heart "
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
            <div className="px-3 ">
              <img src={pics[0]} alt="like" className="like-pic" />
              <span className="px-2 mt-3">Liked by {modalData.liked}</span>
            </div>
            <div className="date-bucket-1">
              <p className="m-0 p-0 text-muted date">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-app" onClick={hideModalHandler}></div>
    </div>
  );
};

export default Modal3;

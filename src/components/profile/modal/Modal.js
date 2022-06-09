import React from "react";
import "./modal.css";
import pic1 from "../../../assets/images/photo2.jpeg";

const Modal = () => {
  return (
    <div>
      <div
        className="modal show fade"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <h1
          role="button"
          style={{
            position: "absolute",
            color: "white",
            top: "0",
            right: "10px",
            fontWeight: "200",
          }}
        >
          x
        </h1>

        <div
          style={{ position: "absolute", left: "0px" }}
          className="modal-dialog modal-dialog-centered"
        >
          <div className="modal-content" style={{ borderRadius: "0px" }}>
            <div style={{ height: "500px" }} className="modal-body">
              <div className="row h-100">
                <div className="col-7 h-100">
                  <div className="h-100">
                    <img
                      src={pic1}
                      style={{ height: "100%", width: "100%" }}
                      alt="user"
                    />
                  </div>
                </div>
                <div className="col-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

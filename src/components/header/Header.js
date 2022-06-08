import React from "react";
import "./header.css";
import pic from "../../assets/images/instagram-logo.png";
import profile from "../../assets/images/photo1.jpeg";

const Header = () => {
  return (
    <div className="header-bucket-1">
      <div className="header-container-1 header-container-2 ">
        <div className="row header-row-1">
          <div className="col-6 d-flex align-items-end ">
            <div>
              <img src={pic} alt="logo" className="logo-img1 " />
            </div>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <div>
              <img src={profile} className=" profile-img" alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

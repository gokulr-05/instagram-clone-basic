import React from "react";
import "./profile.css";
import user from "../../assets/images/user.jpg";
import pic1 from "../../assets/images/photo1.jpeg";
import pic2 from "../../assets/images/photo2.jpeg";
import pic3 from "../../assets/images/photo3.jpeg";
import pic4 from "../../assets/images/photo4.jpeg";
import pic5 from "../../assets/images/photo5.jpeg";
import pic6 from "../../assets/images/photo6.jpeg";

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-bucket-1">
        <div className="profile-bucket-2">
          <div className="row">
            <div className="col-5">
              <img src={user} alt="user" className="user-img" />
            </div>
            <div className="col-7">
              <h3 className="profile-name">through_my_quirky_lens</h3>
              <div className="profile-bucket-3">
                <div className="profile-data ">
                  <p>
                    <strong>6</strong> posts
                  </p>
                  <p>
                    <strong>283</strong> followers
                  </p>
                  <p>
                    <strong>274</strong> following
                  </p>
                </div>
              </div>
              <h6>Rushabh Shah</h6>
              <p>The world through my lens</p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
              <img
                src={pic1}
                className="gallery-img img-fluid1 img-thumbnail1"
                alt="pic"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
              <img
                src={pic2}
                className="gallery-img  img-fluid1 img-thumbnail1"
                alt="pic"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
              <img
                src={pic3}
                className="gallery-img  img-fluid1 img-thumbnail1"
                alt="pic"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
              <img
                src={pic4}
                className="gallery-img  img-fluid1 img-thumbnail1"
                alt="pic"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
              <img
                src={pic5}
                className="gallery-img  img-fluid1 img-thumbnail1"
                alt="pic"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-4 mt-5 gallery-img-bucket">
              <img
                src={pic6}
                className="gallery-img  img-fluid1 img-thumbnail1"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

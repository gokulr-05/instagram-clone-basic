import React from "react";
import "./profile.css";
import GalleryItem from "./GalleryItem";
import user from "../../assets/images/user.jpg";
import pic1 from "../../assets/images/photo1.jpeg";
import pic2 from "../../assets/images/photo2.jpeg";
import pic3 from "../../assets/images/photo3.jpeg";
import pic4 from "../../assets/images/photo4.jpeg";
import pic5 from "../../assets/images/photo5.jpeg";
import pic6 from "../../assets/images/photo6.jpeg";

const Profile = () => {
  let pics = [
    { id: 1, pic: pic1, likes: 135, comments: 54 },
    { id: 2, pic: pic2, likes: 43, comments: 22 },
    { id: 3, pic: pic3, likes: 75, comments: 11 },
    { id: 4, pic: pic4, likes: 67, comments: 98 },
    { id: 5, pic: pic5, likes: 93, comments: 85 },
    { id: 6, pic: pic6, likes: 32, comments: 17 },
  ];

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
            {pics.map((val) => {
              return (
                <GalleryItem
                  key={val.id}
                  pic={val.pic}
                  likes={val.likes}
                  comments={val.comments}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import ctx from "./context";
import pic1 from "../assets/images/photo1.jpeg";
import pic2 from "../assets/images/photo2.jpeg";
import pic3 from "../assets/images/photo3.jpeg";
import pic4 from "../assets/images/photo4.jpeg";
import pic5 from "../assets/images/photo5.jpeg";
import pic6 from "../assets/images/photo6.jpeg";
import { useState } from "react";
const CtxProvider = (props) => {
  let [showModal1, setShowModal1] = useState(false);
  let [showModalId1, setShowModalId1] = useState("");
  let val = {
    username: "through_my_quirky_lens",
    showModalId: showModalId1,
    setShowModalId: (id) => {
      setShowModalId1(id);
    },
    showModal: showModal1,
    setShowModal: (boolVal) => {
      setShowModal1(boolVal);
    },
    modal: [
      {
        id: "1",
        pic: pic1,
        location: "Jungfrau, Switzerland",
        description:
          "what a casual ride on a swiss train. Thank you for the ride.",
        liked: (
          <span>
            <strong> guru</strong> and <strong>69 others</strong>
          </span>
        ),
        date: "May 15, 2020",
        week: "57w",
      },
      {
        id: "2",
        pic: pic2,
        location: "Assam,India",
        description: "Fantastic view point of the tower, Feels awesome",
        liked: (
          <span>
            {" "}
            <strong> karan </strong>and <strong>46 others</strong>
          </span>
        ),
        date: "Jan 25, 2020",
        week: "59w",
      },
      {
        id: "3",
        pic: pic3,
        location: "Tamil Nadu, India",
        description: "Delicious Food on the door step with awesome climate.",
        liked: (
          <span>
            <strong> shaw</strong> and <strong>25 others</strong>
          </span>
        ),
        date: "Jun 15, 2020",
        week: "56w",
      },
      {
        id: "4",
        pic: pic4,
        location: "Kerala, India",
        description: "Fantastic Match with the fantastic climate",
        liked: (
          <span>
            <strong> john</strong> and <strong>99 others</strong>
          </span>
        ),
        date: "Jul 15, 2020",
        week: "56w",
      },
      {
        id: "5",
        pic: pic5,
        location: "Karnataka, India",
        description: "An amazing view of the nature feeling blessed",
        liked: (
          <span>
            <strong> messi</strong> and <strong>27 others</strong>
          </span>
        ),
        date: "Aug 8, 2020",
        week: "55w",
      },
      {
        id: "6",
        pic: pic6,
        location: "Bihar, India",
        description:
          "journey under the shadow of the nature....no words to describe the beauty of the world",
        liked: (
          <span>
            <strong> akthar</strong> and <strong>48 others</strong>
          </span>
        ),
        date: "Sep 10, 2020",
        week: "54w",
      },
    ],
  };

  return <ctx.Provider value={val}>{props.children}</ctx.Provider>;
};

export default CtxProvider;

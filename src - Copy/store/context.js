import { createContext } from "react";

let ctx = createContext({
  username: "",
  showModalId: "",
  setShowModalId: () => {},
  showModal: true,
  setShowModal: () => {},
  modal: [],
});
export default ctx;

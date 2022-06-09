import { createContext } from "react";

let ctx = createContext({
  showModalId: "",
  setShowModalId: () => {},
  showModal: true,
  setShowModal: () => {},
  modal: [],
});
export default ctx;

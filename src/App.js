import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import "./App.css";
import ctx from "./store/context";

import Modal3 from "./components/profile/modal/Modal3";
import { useContext } from "react";
function App() {
  let ctx1 = useContext(ctx);
  return (
    <div className="app">
      {ctx1.showModal && <Modal3 />}
      <Header />
      <Profile />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {/* <div className="background-image-container">
        <img
          src="/fleet.jpg"
          className="background-image"
          alt=" of fleet cars"
        />
      </div> */}
      <div className="content">{children}</div>
      <footer>
        <p className="white-text">CopyRight 2023 Fleet </p>
        <FontAwesomeIcon icon={faMugHot} />
        <FontAwesomeIcon icon={"coffee"} />
      </footer>
    </div>
  );
};

export default Layout;

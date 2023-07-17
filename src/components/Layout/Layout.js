import React from "react";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="hero-img-background">
        {/* <img src="fleet.jpg" className="hero-img-background"></img> */}
      </div>
      <div className="bring-forward">
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
          <p className="white-text">
            CopyRight 2023 Elite Fleet Mechanics | Address: 623 W. Commonwealth
            Ave, Fullerton, CA
          </p>
          <FontAwesomeIcon icon={faMugHot} />
          <FontAwesomeIcon icon={"coffee"} />
        </footer>
      </div>
    </div>
  );
};

export default Layout;

import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        {/* <h2>Logo</h2>
        <h3>About Us</h3>
        <p>Services</p>
        <p>714-888-8888</p> */}
        <Link to={"/"}>
          <img src="logo-elite.png" className="logo-elite" />
        </Link>
        <div className="links">
          <Link to={"/"} className="white-text">
            714-888-8888
          </Link>
          {/* <Link to={"/projects"}>Services</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
        <Link to={"/"}>Logo</Link>
        <div className="links">
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

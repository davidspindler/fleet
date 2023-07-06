import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>CopyRight 2023 Fleet </p>
      </footer>
    </div>
  );
};

export default Layout;

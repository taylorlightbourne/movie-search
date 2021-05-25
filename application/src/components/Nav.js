import React from "react";
import "../App.css";

const Nav = () => {

  return (
    <div className="nav">
        <div className="logo">
            <h1>Movie Search</h1>
        </div>
        <div className="links">
             <a href="./BrowseContainer">Browse</a>
             <a href="./SearchContainer">Search</a>
        </div>
    </div>
  );
};
export default Nav;
import React from "react";
import "./SearchBar.css";
import ImageLogo from "./ImageLogo";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="icon-logo">
        <i className="fab fa-instagram fa-2x" />
      </div>
      <div className="image-logo">
        <ImageLogo />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="input-search" />
        <i className="fas fa-search" />
      </div>
      <div className="social-container">
        <div className="social-icon">
          <i className="far fa-compass fa-2x" />
        </div>
        <div className="social-icon">
          <i className="far fa-heart fa-2x" />
        </div>
        <div className="social-icon">
          <i className="far fa-user fa-2x" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

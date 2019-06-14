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
      <div>
        <input type="text" placeholder="Search" />
        <i className="fas fa-search" />
      </div>
      <div className="social-icon">
        <i className="far fa-compass" />
      </div>
      <div className="social-icon">
        <i className="far fa-heart" />
      </div>
      <div className="social-icon">
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;

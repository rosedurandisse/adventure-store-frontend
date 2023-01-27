import React, { useState } from "react";
import "./searchBar.scss";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="SearchBar__input">
      <input
        className="searchBar"
        placeholder="Search an activity"
        value={searchTerm}
        onChange={updateSearchTerm}
      ></input>
    </div>
  );
};

export default SearchBar;

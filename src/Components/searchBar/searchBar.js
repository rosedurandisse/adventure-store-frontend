import React from "react";
import "./searchBar.scss";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Search an activity"
        value={searchTerm}
        onChange={updateSearchTerm}
      ></input>
    </div>
  );
};

export default SearchBar;

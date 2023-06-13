import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Nav(props) {
  return <SearchBar onSearch={props.onSearch} />;
}

export default Nav;

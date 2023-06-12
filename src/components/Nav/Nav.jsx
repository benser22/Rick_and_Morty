import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Nav() {
  return <SearchBar onSearch={(characterID) => window.alert(characterID)} />;
}

export default Nav;

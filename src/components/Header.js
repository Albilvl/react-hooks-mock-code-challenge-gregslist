import React from "react";
import Search from "./Search";

function Header({handleSearch, searchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Content from "./Content";
import DropdownMenu from "./DropdownMenu";
import { useTheme } from "./Theme";

function MainPage({ countries, regionFilter, setRegionFilter, setSearchQuery, searchQuery }) {
  
  const theme = useTheme();

  function searchInput(input) {
    setSearchQuery(input);
  }

  function filterByRegion(value) {
    setRegionFilter(value);
  }


  return (
    <>
      <main className="container">
        <div style={{backgroundColor: theme.background}} className="content">
          <Content
            countries={countries.filter(
              (country) =>
                country["name"]["common"]
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) &&
                country["region"].includes(regionFilter)
            )}
          >
            <div className="sub-container">
              <SearchBar searchQuery={searchQuery} f={searchInput} />
              <DropdownMenu f={filterByRegion} />
            </div>
          </Content>
        </div>
      </main>
    </>
  );
}

export default MainPage;

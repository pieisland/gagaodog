import React from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  width: 100%;
  height: 40px;
  background-color: pink;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInnerWrap = styled.div`
    background-color:
    position:absoulte;
    width:95%;
    height:80%;
    background-color:orange;
`;

const Search = () => {
  return (
    <>
      <SearchWrap>
        <SearchInnerWrap>이름 검색</SearchInnerWrap>
      </SearchWrap>
    </>
  );
};
export default Search;

import React from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  width: 100%;
  height: 40px;
  //background-color: pink;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInnerWrap = styled.div`
    background-color:
    position:absoulte;
    width:100%;
    height:80%;
    background-color: rgb(246, 246, 247);
    border-radius:20px;

    display:flex;
    align-items:center;
  
    > div {
      margin-left:10px;
    }
    margin:0 20px;
`;

const Search = () => {
  return (
    <>
      <SearchWrap>
        <SearchInnerWrap>
          <div>
            <svg width="30" height="30" viewBox="0, 0, 400,400">
              <g id="svgg">
                <path
                  id="path0"
                  d="M141.916 94.962 C 101.194 109.537,84.143 130.230,77.934 172.613 C 67.145 246.263,150.477 304.143,221.783 272.528 L 241.567 263.757 270.372 292.369 C 288.449 310.326,300.973 319.871,304.000 318.000 C 307.244 315.995,299.411 305.542,280.087 286.088 L 251.349 257.157 263.932 239.306 C 318.773 161.502,234.514 61.823,141.916 94.962 M205.746 104.353 C 259.421 117.869,287.894 185.850,257.809 228.657 C 191.081 323.599,48.686 242.487,98.351 137.826 C 111.688 109.721,163.245 93.651,205.746 104.353 "
                  stroke="none"
                ></path>
              </g>
            </svg>
          </div>
          <div> 이름 검색</div>
        </SearchInnerWrap>
      </SearchWrap>
    </>
  );
};
export default Search;

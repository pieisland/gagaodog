import React from "react";
import styled from "styled-components";

const LeftSideBarDiv = styled.div`
  // position: absolute;
  background-color: gray;
  width: 57px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopMenuWrap = styled.div`
  margin-top: 20px;
  background-color: green;

  > div {
    background-color: white;
    height: 50px;
    border: 1px solid red;
  }
`;

const BottomMenuWrap = styled.div`
  background-color: yellow;
  margin-bottom: 20px;

  > div {
    background-color: white;
    height: 40px;
    border: 1px solid red;
  }
`;

const LeftSideBar = () => {
  return (
    <>
      <LeftSideBarDiv>
        <TopMenuWrap>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </TopMenuWrap>
        <BottomMenuWrap>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </BottomMenuWrap>
      </LeftSideBarDiv>
    </>
  );
};
export default LeftSideBar;

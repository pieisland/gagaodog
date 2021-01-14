import React from "react";
import styled from "styled-components";
import LeftSideBar from "./components/LeftSideBar";
import Main from "./components/Main";
import "./common/reset.css";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <>
      <Wrap>
        <LeftSideBar></LeftSideBar>
        <Main></Main>
      </Wrap>
    </>
  );
};
export default App;

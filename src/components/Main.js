import React from "react";
import styled from "styled-components";
import Option from "../components/Option";
import FriendsAdd from "../components/FriendsAdd";
import Search from "../components/Search";
import User from "../components/User";
import Friends from "../components/Friends";

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Main = () => {
  return (
    <>
      <MainWrap>
        <Option></Option>
        <FriendsAdd></FriendsAdd>
        <Search></Search>
        <User></User>
        <Friends></Friends>
      </MainWrap>
    </>
  );
};
export default Main;

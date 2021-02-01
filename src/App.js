import React, { useReducer, useState } from "react";
import styled from "styled-components";
import LeftSideBar from "./components/LeftSideBar";
import Main from "./components/Main";
import "./common/reset.css";
import ProfileModal from "./components/ProfileModal";
import ProfileEditModal from "./components/ProfileEditModal";
import ChattingModal from "./components/ChattingModal";

import neoul from "../public/images/neoul.png";
import neoulBack from "../public/images/neoul-back.png";
import noneProfile from "../public/images/none-profile.png";
import bok from "../public/images/bok.png";
import bongdol from "../public/images/bongdol.PNG";
import tongs from "../public/images/tongs.jpg";
import noneProfileBack from "../public/images/none-profile-back.png";

export const UserContext = React.createContext();

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function userReducer(state, action) {
  switch (action.type) {
    case "selectUser": {
      return { selIdx: action.payload.idx, userInfos: state.userInfos };
    }
    case "setUserInfo": {
      const newUserInfos = state.userInfos.map((info) => {
        if (info.id === state.selIdx) {
          info.name = action.payload.name;
          info.content = action.payload.content;
          return info;
        } else return info;
      });
      return { selIdx: state.selIdx, userInfos: newUserInfos };
    }
    default:
      return state;
  }
}

const userInfos = [
  {
    id: 0,
    name: "너울",
    content: "안녕하세요~",
    src: neoul,
    srcBack: neoulBack,
  },
  {
    id: 1,
    name: "복복",
    content: "밥달라개",
    src: bok,
    srcBack: noneProfileBack,
  },
  {
    id: 2,
    name: "봉돌",
    content: "안녕 ㅎ.ㅎ",
    src: bongdol,
    srcBack: noneProfileBack,
  },
  {
    id: 3,
    name: "봉순",
    src: noneProfile,
    content: "",
    srcBack: noneProfileBack,
  },
  {
    id: 4,
    name: "텅스",
    content: "노즈워크 좋아해요~",
    src: tongs,
    srcBack: noneProfileBack,
  },
];

const App = () => {
  const [userInfo, userDispatch] = useReducer(userReducer, {
    selIdx: 0,
    userInfos: userInfos,
  });

  const [tempInfo, tempFunc] = useState({ name: "", content: "" });

  return (
    <>
      <UserContext.Provider
        value={{ userInfo, userDispatch, tempInfo, tempFunc }}
      >
        <Wrap id="mainWrap">
          <LeftSideBar></LeftSideBar>
          <Main></Main>
        </Wrap>
        <ProfileModal></ProfileModal>
        <ProfileEditModal></ProfileEditModal>
        <ChattingModal></ChattingModal>
      </UserContext.Provider>
    </>
  );
};
export default App;

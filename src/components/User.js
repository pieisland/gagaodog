import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../App";

const UserWrap = styled.div`
  width: 100%;
  height: 70px;
  // background-color: brown;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const UserInnerWrap = styled.div`
  position: absoulte;
  width: 100%;
  height: 100%;
  //background-color: orange;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgb(246, 246, 247);
  }
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 18px;
  background-color: white;
  background-image: ${(props) => `url(${props.src})`};

  background-size: 50px;
  margin-left: 20px;

  cursor: pointer;
`;

const ProfileContent = styled.div`
  width: 100%;
  height: 80%;
  //background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    margin-left: 10px;
  }
`;

const User = () => {
  const { userInfo, userDispatch, tempFunc } = useContext(UserContext);

  const clickProfile = (idx) => {
    const modalWrap = document.querySelector("#modalWrap");
    modalWrap.classList.remove("hidden");

    userDispatch({
      type: "selectUser",
      payload: { idx: idx },
    });
    tempFunc({
      name: userInfo.userInfos[idx].name,
      content: userInfo.userInfos[idx].content,
    });
  };

  const openChat = () => {
    console.log("open chat");

    userDispatch({
      type: "selectUser",
      payload: { idx: idx },
    });
  };

  return (
    <>
      <UserWrap onDoubleClick={() => openChat()}>
        <UserInnerWrap>
          <ProfilePicture
            src={userInfo.userInfos[0].src}
            onClick={() => clickProfile(0)}
          ></ProfilePicture>
          <ProfileContent>
            <div>{userInfo.userInfos[0].name}</div>
            <div>{userInfo.userInfos[0].content}</div>
          </ProfileContent>
        </UserInnerWrap>
      </UserWrap>
    </>
  );
};
export default User;

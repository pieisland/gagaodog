import React, { useContext } from "react";
import styled from "styled-components";
import noneProfile from "../../public/images/none-profile.png";
// import bok from "../../public/images/bok.png";
// import bongdol from "../../public/images/bongdol.PNG";
// import tongs from "../../public/images/tongs.jpg";

import { UserContext } from "../App";

const FriendsWrap = styled.div`
  width: 100%;
  height: 50%;
  //background-color: yellow;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FriendsInnerWrap = styled.div`
  // background-color: purple;
  //   position: absoulte;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;

const ProfileWrap = styled.div`
  // background-color: red;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  &:hover {
    background-color: rgb(246, 246, 247);
  }
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  //background-color: white;

  background-image: ${(props) => `url(${props.src})` || `url(${noneProfile})`};
  background-size: 40px;

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

const FriendsAccordion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 20px;
  }
`;

const Friends = () => {
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
  };

  return (
    <>
      <FriendsWrap>
        <FriendsInnerWrap>
          <FriendsAccordion>
            <div>친구</div>
            <div>접기</div>
          </FriendsAccordion>
          {userInfo.userInfos.map((user, idx) => {
            return (
              <>
                {idx === 0 ? (
                  <></>
                ) : (
                  <ProfileWrap
                    key={`profileWrap-${idx}`}
                    onDoubleClick={() => openChat()}
                  >
                    <ProfilePicture
                      key={`profilePicture-${idx}`}
                      src={user.src}
                      onClick={() => clickProfile(idx)}
                    ></ProfilePicture>
                    <ProfileContent key={`profileContent-${idx}`}>
                      <div>{user.name}</div>
                      {user.content !== undefined ? (
                        <div>{user.content}</div>
                      ) : (
                        <></>
                      )}
                    </ProfileContent>
                  </ProfileWrap>
                )}
              </>
            );
          })}
        </FriendsInnerWrap>
      </FriendsWrap>
    </>
  );
};
export default Friends;

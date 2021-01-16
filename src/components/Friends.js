import React from "react";
import styled from "styled-components";
import noneProfile from "../../public/images/none-profile.png";
import bok from "../../public/images/bok.png";
import bongdol from "../../public/images/bongdol.PNG";
import tongs from "../../public/images/tongs.jpg";

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
  //background-color: purple;
  //   position: absoulte;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;

const ProfileWrap = styled.div`
  //background-color: red;
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
  const friendsList = [
    { name: "복복", content: "밥달라개", src: bok },
    { name: "봉돌", content: "안녕 ㅎ.ㅎ", src: bongdol },
    { name: "봉순", src: noneProfile },
    { name: "텅스", content: "노즈워크 좋아해요~", src: tongs },
  ];

  return (
    <>
      <FriendsWrap>
        <FriendsInnerWrap>
          <FriendsAccordion>
            <div>친구</div>
            <div>접기</div>
          </FriendsAccordion>
          {friendsList.map((friend, idx) => {
            return (
              <ProfileWrap key={`profileWrap-${idx}`}>
                <ProfilePicture
                  key={`profilePicture-${idx}`}
                  src={friend.src}
                ></ProfilePicture>
                <ProfileContent key={`profileContent-${idx}`}>
                  <div>{friend.name}</div>
                  {friend.content !== undefined ? (
                    <div>{friend.content}</div>
                  ) : (
                    <></>
                  )}
                </ProfileContent>
              </ProfileWrap>
            );
          })}
        </FriendsInnerWrap>
      </FriendsWrap>
    </>
  );
};
export default Friends;

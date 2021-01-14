import React from "react";
import styled from "styled-components";

const FriendsWrap = styled.div`
  width: 100%;
  height: 50%;
  background-color: yellow;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FriendsInnerWrap = styled.div`
  background-color: purple;
  //   position: absoulte;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;

const ProfileWrap = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
`;

const ProfileContent = styled.div`
  width: 100%;
  height: 80%;
  background-color: skyblue;
`;

const FriendsAccordion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Friends = () => {
  const friendsList = [
    { name: "bok", content: "안녕" },
    { name: "gwang", content: "사랑해" },
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
                <ProfilePicture key={`profilePicture-${idx}`}></ProfilePicture>
                <ProfileContent key={`profileContent-${idx}`}>
                  <div>{friend.name}</div>
                  <div>{friend.content}</div>
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

import React from "react";
import styled from "styled-components";

const UserWrap = styled.div`
  width: 100%;
  height: 70px;
  background-color: brown;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const UserInnerWrap = styled.div`
  position: absoulte;
  width: 95%;
  height: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
`;

const ProfileContent = styled.div`
  width: 100%;
  height: 50%;
  background-color: skyblue;
`;

const User = () => {
  return (
    <>
      <UserWrap>
        <UserInnerWrap>
          <ProfilePicture></ProfilePicture>
          <ProfileContent>안녕하세요</ProfileContent>
        </UserInnerWrap>
      </UserWrap>
    </>
  );
};
export default User;

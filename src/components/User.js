import React from "react";
import styled from "styled-components";
import profile from "../../public/images/neoul.png";

const UserWrap = styled.div`
  width: 100%;
  height: 70px;
  //background-color: brown;

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

  background-image: url(${profile});
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

const TmpDiv = styled.div`
  position: absolute;
  background-color: black;
`;

const clickProfile = () => {
  console.log("user profile click");
  const modalWrap = document.querySelector("#modalWrap");
  modalWrap.classList.remove("hidden");
  //mainWrap.innerHTML += `<TmpDiv>안녕하세용..</TmpDiv>`;
};

const User = () => {
  return (
    <>
      <UserWrap>
        <UserInnerWrap>
          <ProfilePicture onClick={clickProfile}></ProfilePicture>
          <ProfileContent>
            <div>너울</div>
            <div>안녕하세요</div>
          </ProfileContent>
        </UserInnerWrap>
      </UserWrap>
    </>
  );
};
export default User;

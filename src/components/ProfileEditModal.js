import React, { useState, useContext, useRef } from "react";
import "../common/common.css";
import styled from "styled-components";

import { UserContext } from "../App";

const Modal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  //background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;

  position: absolute;
`;

const ModalContent = styled.div`
  background-color: white;

  //padding: 50px 100px;
  //text-align: center;

  position: relative;

  //border-radius: 10px;
  width: 250px;
  height: 80%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  //  background-image = url();

  display: flex;
  flex-direction: column;
  //   background-color: beige;

  #editText {
    margin-left: 15px;
  }
`;
const ModalContentTop = styled.div`
  //   background-color: gold;

  display: flex;
  justify-content: center;
  //position: absolute;
  height: 6%;
  width: 100%;
`;

const ModalContentMiddle = styled.div`
  width: 100%;
  height: 75%;
  //   background-color: green;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalContentBottom = styled.div`
  width: 100%;
  height: 15%;
  background-coor: yellow;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BottomWrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  //   background-color: pink;

  #applyEditBtn {
    background-color: rgb(254, 229, 0);
    &:hover {
      background-color: rgb(250, 218, 10);
    }
  }

  #cancelEditBtn {
    background-color: white;
    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
`;

const Btn = styled.div`
  border: 1px solid rgb(210, 210, 210);
  width: 70px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const TopWrap = styled.div`
  width: 95%;
  display: flex;
  margin-top: 3px;
  justify-content: space-between;
`;

const CloseSvg = styled.svg`
  cursor: pointer;
  fill: rgb(80, 80, 80);

  &:hover {
    fill: black;
  }
`;

const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 30px;
  background-color: white;

  background-image: ${(props) => `url(${props.src})`};
  background-size: 80px;

  margin-top: 30px;
  margin-bottom: 20px;

  cursor: pointer;
`;

const InputWrap = styled.div`
  width: 85%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 25px;

  outline: 0;
  border-width: 0 0 1px;
  border-color: rgb(50, 50, 50);
`;

const ProfileEditModal = () => {
  const { userInfo, userDispatch, tempInfo, tempFunc } = useContext(
    UserContext
  );
  let currentName = userInfo.userInfos[userInfo.selIdx].name;
  let currentContent = userInfo.userInfos[userInfo.selIdx].content;
  //console.log("currentInfo", currentName, currentContent);
  //console.log("tempInfo", tempInfo);

  const inputRef = useRef(false);

  /*const [myinfo, editInfo] = useState({
    name: currentName,
    content: currentContent,
  });

  console.log("myinfo", myinfo.name, myinfo.content);*/
  //이것때문에 재렌더링 또 렌더링 또렌더링 때문에 안되는 거 아님?
  //editInfo({ name: currentName, content: currentContent });

  const closeModal = () => {
    document.querySelector("#modalWrap2").classList.add("hidden");
  };

  const applyChange = () => {
    const nameVal = document.querySelector("#inputName").value;
    const contentVal = document.querySelector("#inputContent").value;

    userDispatch({
      type: "setUserInfo",
      payload: { name: nameVal, content: contentVal },
    });
    console.log(nameVal, contentVal);
  };

  const func1 = (e) => {
    // console.log(e.target.value);
    // console.log(inputRef.current.value);
    tempFunc({ name: e.target.value, content: tempInfo.content });
    //editInfo({ name: e.target.value, content: currentContent });
    //document.querySelector("#inputName").value = currentName;
  };
  const func2 = (e) => {
    tempFunc({ name: tempInfo.name, content: e.target.value });
    //    editInfo({ name: currentName, content: e.target.value });
  };

  return (
    <>
      <div id="modalWrap2" className="hidden">
        <Modal>
          <ModalOverlay onClick={closeModal}></ModalOverlay>
          <ModalContent>
            <ModalContentTop>
              <TopWrap>
                <div></div>
                <div>
                  <CloseSvg
                    id="x"
                    width="20"
                    height="20"
                    viewBox="0, 0, 400,400"
                    onClick={closeModal}
                  >
                    <g id="svgg">
                      <path
                        id="path0"
                        d="M236.000 144.000 C 190.813 181.534,198.275 179.971,168.591 158.119 C 139.137 136.437,100.000 113.941,100.000 118.694 C 100.000 120.595,115.750 133.388,135.000 147.123 C 154.250 160.857,173.583 174.838,177.963 178.192 C 185.621 184.056,184.317 185.838,143.963 224.667 C 119.549 248.158,104.113 265.808,107.052 266.872 C 109.831 267.878,123.331 258.008,137.052 244.938 C 150.773 231.868,169.718 214.339,179.152 205.985 L 196.303 190.795 223.152 209.570 C 237.918 219.897,258.747 234.568,269.437 242.173 C 289.284 256.292,296.000 258.856,296.000 252.313 C 296.000 249.027,228.377 197.086,212.616 188.265 C 204.288 183.605,208.295 179.028,248.265 147.544 C 275.637 125.984,287.452 111.459,277.000 112.218 C 275.350 112.338,256.900 126.640,236.000 144.000 "
                        stroke="none"
                      ></path>
                    </g>
                  </CloseSvg>
                </div>
              </TopWrap>
            </ModalContentTop>
            <div id="editText">기본프로필 편집</div>
            <ModalContentMiddle>
              <div>
                <ProfilePicture
                  src={userInfo.userInfos[userInfo.selIdx].src}
                ></ProfilePicture>
              </div>
              <InputWrap>
                <Input
                  id="inputName"
                  type="text"
                  //   value={myinfo.name}
                  //   value={userInfo.userInfos[userInfo.selIdx].name}
                  //   value={currentName}
                  value={tempInfo.name}
                  ref={inputRef}
                  onChange={func1}
                ></Input>
              </InputWrap>
              <InputWrap>
                <Input
                  id="inputContent"
                  type="text"
                  //value={myinfo.content}
                  //value="멍멍"
                  value={
                    tempInfo.content
                    // currentContent
                    //myinfo.content
                    // userInfo.userInfos[userInfo.selIdx].content
                    //   ? userInfo.userInfos[userInfo.selIdx].content
                    //   : ""
                  }
                  onChange={func2}
                ></Input>
              </InputWrap>
            </ModalContentMiddle>
            <ModalContentBottom>
              <BottomWrap>
                <Btn id="applyEditBtn">
                  <div
                    onClick={() => {
                      applyChange();
                      closeModal();
                    }}
                  >
                    확인
                  </div>
                </Btn>
                <Btn id="cancelEditBtn">
                  <div onClick={closeModal}>취소</div>
                </Btn>
              </BottomWrap>
            </ModalContentBottom>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default ProfileEditModal;

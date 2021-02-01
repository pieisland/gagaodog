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

  position: relative;
  width: 350px;
  height: 86%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  flex-direction: column;
  //   background-color: beige;

  #editText {
    margin-left: 15px;
  }
`;
const ModalContentTop = styled.div`
  background-color: rgb(169, 189, 206);

  display: flex;
  justify-content: space-between;
  //position: absolute;
  height: 15%;
  width: 100%;
`;

const ModalContentTopLeft = styled.div`
  background-color: rgb(169, 189, 206);
  height: 100%;
  width: 80%;
`;

const ModalContentTopRight = styled.div`
  display: flex;
  justify-content: flex-end;

  //   background-color: beige;
  height: 100%;
  width: 20%;
`;

const ModalContentMiddle = styled.div`
  width: 100%;
  height: 65%;
  background-color: rgb(178, 199, 217);

  display: flex;
  flex-direction: column;

  align-items: flex-end;
  overflow-y: auto;
`;

const ModalContentBottom = styled.div`
  width: 100%;
  height: 20%;
  //   background-color: yellow;

  display: flex;
  align-items: center;
  //   justify-content: flex-end;
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

  margin: 15px 12px 0 0;

  &:hover {
    fill: black;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  //   background-color: green;
  margin: 15px 0 0 15px;

  div {
    margin-right: 7px;
  }
`;

const ProfilePicture = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 13px;
  background-color: white;

  background-image: ${(props) => `url(${props.src})`};
  background-size: 45px;

  //   margin-top: 30px;
  //   margin-bottom: 20px;

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
  border-color: red;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 90%;
  margin-left: 5px;
  resize: none;

  border: none;
`;

const SubmitBtnWrap = styled.div`
  height: 90%;
  margin-left: 5px;
`;

const SubmitBtn = styled.button`
  width: 50px;
  height: 30px;

  background-color: rgb(255, 235, 51);
  border: 1px solid gray;

  &:hover {
    background-color: rgb(253, 221, 40);
  }
`;

const Chat = styled.div`
  height: 30px;
  //   width: 50px;
  display: flex;
  align-items: center;

  margin: 5px 23px 5px 0;

  background-color: rgb(255, 235, 51);
`;

const ChattingModal = () => {
  const { userInfo, userDispatch, tempInfo, tempFunc } = useContext(
    UserContext
  );
  let currentName = userInfo.userInfos[userInfo.selIdx].name;
  let currentContent = userInfo.userInfos[userInfo.selIdx].content;

  const [contents, setContents] = useState(["오늘 뭐 먹지", "bing gong mi"]);

  const closeModal = () => {
    document.querySelector("#modalWrap3").classList.add("hidden");
  };

  const submitMessage = () => {
    const textArea = document.querySelector("#textArea");
    const value = textArea.value;

    let cnt = 0;
    Array.from(value).map((char) => {
      if (char === " ") cnt++;
    });
    if (cnt === value.length) {
      return;
    }

    if (value !== "") {
      /*let myval = Array.from(value).reduce((acc, char) => {
        let val = char;
        if (char == " ") {
          val = `&nbsp;`;
        }
        return acc + val;
      }, "");
      console.log(myval);*/
      setContents([...contents, value]);
    }

    textArea.value = "";
  };

  return (
    <>
      <div id="modalWrap3" className="hidden_">
        <Modal>
          <ModalOverlay onClick={closeModal}></ModalOverlay>
          <ModalContent>
            <ModalContentTop>
              <ModalContentTopLeft>
                <ProfileInfo>
                  <ProfilePicture
                    src={userInfo.userInfos[userInfo.selIdx].src}
                  ></ProfilePicture>
                  <div>{userInfo.userInfos[userInfo.selIdx].name}</div>
                </ProfileInfo>
              </ModalContentTopLeft>
              <ModalContentTopRight>
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
              </ModalContentTopRight>
            </ModalContentTop>
            <ModalContentMiddle id="chatArea">
              {contents.map((content, idx) => {
                return <Chat key={`chat${idx}`}>{content}</Chat>;
              })}
            </ModalContentMiddle>
            <ModalContentBottom>
              <TextArea id="textArea"></TextArea>
              <SubmitBtnWrap>
                <SubmitBtn onClick={submitMessage}>전송</SubmitBtn>
              </SubmitBtnWrap>
            </ModalContentBottom>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default ChattingModal;

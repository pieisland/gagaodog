import React from "react";
import styled from "styled-components";

const FriendsAddWrap = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
`;

const FriendsAddInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FriendsAdd = () => {
  return (
    <>
      <FriendsAddWrap>
        <FriendsAddInnerWrap>
          <div>친구</div>
          <div>+</div>
        </FriendsAddInnerWrap>
      </FriendsAddWrap>
    </>
  );
};
export default FriendsAdd;

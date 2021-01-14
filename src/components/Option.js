import React from "react";
import styled from "styled-components";

const OptionWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20px;
  background-color: blue;
`;

const OptionInnerWrap = styled.div`
  display: flex;
  margin-right: 3px;
`;

const Option = () => {
  return (
    <>
      <OptionWrap>
        <OptionInnerWrap>
          <div>-</div>
          <div>+</div>
          <div>x</div>
        </OptionInnerWrap>
      </OptionWrap>
    </>
  );
};
export default Option;

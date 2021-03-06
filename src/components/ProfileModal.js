import React, { useContext } from "react";
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
  //   background-color: white;
  background-image: ${(props) => `url(${props.srcBack})`};

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
`;

const ModalContentTop = styled.div`
  //   background-color: gold;

  display: flex;
  justify-content: center;
  //position: absolute;
  height: 10%;
  width: 100%;
`;

const TopWrap = styled.div`
  width: 95%;
  display: flex;
  margin-top: 3px;
  justify-content: space-between;
`;

const ModalContentMiddle = styled.div`
  //position:absolute;
  //   background-color: yellow;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const ModalContentBottom = styled.div`
  //   background-color: pink;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePicture = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 24px;
  background-color: white;

  background-image: ${(props) => `url(${props.src})`};
  background-size: 65px;

  cursor: pointer;
`;

const ProfileContent = styled.div`
  height: 60px;
  //   background-color: green;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ModalContentBottomInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  //   background-color: red;
`;

const BottomInnerThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 33%;
  //   border: 1px solid white;

  cursor: pointer;
  &:hover {
    div {
      color: rgb(235, 235, 235);
    }

    svg {
      fill: rgb(235, 235, 235);
    }
  }
`;

const Text = styled.div`
  color: white;
  font-size: ${(props) => `${props.fontSize}px` || "5px"};
`;

const CloseSvg = styled.svg`
  cursor: pointer;
  fill: white;

  &:hover {
    fill: rgb(235, 235, 235);
  }
`;

const EditSvg = styled.svg`
  cursor: poiner;
  fill: white;
`;

const ProfileModal = () => {
  const { userInfo } = useContext(UserContext);

  //console.log(userInfo);

  const closeModal = () => {
    document.querySelector("#modalWrap").classList.add("hidden");
  };

  const editProfile = () => {
    console.log(userInfo.selIdx);
    closeModal();
    document.querySelector("#modalWrap2").classList.remove("hidden");
  };

  const showChattingModal = () => {
    // console.log("채팅");
    document.querySelector("#modalWrap").classList.add("hidden");
    document.querySelector("#modalWrap3").classList.remove("hidden");
  };

  return (
    <>
      <div id="modalWrap" className="hidden">
        <Modal>
          <ModalOverlay onClick={closeModal}></ModalOverlay>
          <ModalContent srcBack={userInfo.userInfos[userInfo.selIdx].srcBack}>
            <ModalContentTop>
              <TopWrap>
                <div>
                  <svg
                    id="backPic"
                    width="25"
                    height="25"
                    viewBox="0, 0, 400,400"
                    fill="white"
                  >
                    <g id="svgg">
                      <path
                        id="path0"
                        d="M195.500 72.621 C 193.850 72.869,185.209 73.976,176.297 75.081 C 167.386 76.185,157.711 77.747,154.797 78.553 C 151.884 79.358,145.414 81.069,140.421 82.355 C 97.211 93.485,63.398 157.894,73.959 208.957 C 82.512 250.310,101.372 278.277,136.347 301.469 C 164.916 320.413,168.984 321.508,200.254 318.669 C 246.291 314.488,278.885 296.572,298.496 264.666 C 334.646 205.855,307.058 101.019,250.147 80.932 C 234.253 75.322,206.056 71.034,195.500 72.621 M230.000 78.516 C 268.043 86.576,286.719 103.267,300.983 141.954 C 329.769 220.026,299.942 292.023,230.978 310.931 C 212.733 315.934,179.020 318.430,168.000 315.594 C 150.419 311.069,112.633 283.172,101.157 266.243 C 62.308 208.934,67.718 140.405,114.178 101.322 C 125.218 92.034,133.999 86.399,138.726 85.569 C 140.802 85.204,146.327 83.801,151.005 82.451 C 175.249 75.453,207.874 73.828,230.000 78.516 M227.514 125.168 C 218.853 131.981,220.853 146.000,230.487 146.000 C 241.567 146.000,246.759 138.329,241.997 128.994 C 238.750 122.629,232.754 121.046,227.514 125.168 M155.340 171.829 C 146.412 178.891,139.621 189.470,126.024 217.500 C 109.077 252.434,108.655 251.396,138.240 247.565 C 155.674 245.307,162.050 245.020,205.500 244.538 C 260.587 243.926,276.938 242.245,273.073 237.588 C 272.493 236.889,272.313 236.020,272.675 235.658 C 273.037 235.296,272.823 235.000,272.200 235.000 C 271.577 235.000,266.692 228.813,261.345 221.250 C 249.387 204.338,231.859 182.857,224.944 176.640 C 216.629 169.164,211.600 170.603,202.441 183.081 C 197.372 189.985,195.561 189.761,184.976 180.923 C 168.329 167.022,163.348 165.494,155.340 171.829 "
                        stroke="none"
                      ></path>
                    </g>
                  </svg>
                </div>
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
            <ModalContentMiddle>
              <ProfilePicture
                src={userInfo.userInfos[userInfo.selIdx].src}
              ></ProfilePicture>
              <ProfileContent>
                <ContentWrap>
                  <Text fontSize="12">
                    {userInfo.userInfos[userInfo.selIdx].name}
                  </Text>
                  {/* {userInfo.selIdx === 0 ? <></> : <div>수정</div>} */}
                  <Text fontSize="12">
                    {userInfo.userInfos[userInfo.selIdx].content}
                  </Text>
                </ContentWrap>
              </ProfileContent>
            </ModalContentMiddle>
            <ModalContentBottom>
              <ModalContentBottomInnerWrap>
                <BottomInnerThree onClick={showChattingModal}>
                  <div>
                    <svg
                      id="chat"
                      width="20"
                      height="25"
                      viewBox="0, 0, 400,400"
                      fill="white"
                    >
                      <g>
                        <path d="M170.431 64.772 C 32.242 77.686,-33.574 229.857,82.466 268.154 C 94.764 272.212,95.018 272.760,90.872 286.268 C 84.224 307.929,90.644 310.790,118.603 298.628 C 139.860 289.381,148.036 288.307,208.000 286.879 C 325.799 284.075,379.643 251.785,379.912 183.785 C 380.227 104.206,290.987 53.506,170.431 64.772 "></path>
                      </g>
                    </svg>
                  </div>
                  <Text fontSize="5">
                    {userInfo.selIdx === 0 ? <>나와의 채팅</> : <>1:1 채팅</>}
                  </Text>
                </BottomInnerThree>
                {/* {userInfo.selIdx === 0 ? ( */}
                <BottomInnerThree onClick={editProfile}>
                  <div>
                    <EditSvg
                      id="edit"
                      width="25"
                      height="25"
                      viewBox="0, 0, 400,400"
                    >
                      <g>
                        <path
                          id="path0"
                          d="M255.679 96.146 C 254.428 96.831,247.968 98.034,244.315 98.263 C 243.113 98.338,242.352 98.760,242.624 99.200 C 243.114 99.994,242.090 100.279,238.773 100.269 C 237.823 100.267,237.258 100.608,237.517 101.027 C 237.910 101.663,235.903 103.035,234.000 103.432 C 231.069 104.043,226.051 108.881,227.779 109.430 C 229.917 110.108,282.834 162.091,287.764 168.356 C 290.319 171.602,291.092 172.042,292.650 171.136 C 293.842 170.443,294.012 170.050,293.128 170.030 C 291.979 170.005,291.973 169.737,293.092 168.389 C 294.793 166.340,301.000 152.121,301.000 150.274 C 301.000 149.476,301.493 149.187,302.155 149.595 C 302.789 149.988,303.042 149.878,302.717 149.351 C 302.391 148.824,302.452 144.961,302.853 140.767 C 303.253 136.572,303.275 133.330,302.900 133.562 C 302.526 133.793,301.941 132.499,301.601 130.685 C 300.398 124.276,289.182 107.151,287.050 108.469 C 286.560 108.772,285.224 107.829,284.080 106.375 C 282.936 104.920,282.000 104.039,282.000 104.416 C 282.000 104.793,280.538 103.998,278.750 102.649 C 274.950 99.782,268.583 97.000,265.819 97.000 C 264.754 97.000,264.091 96.662,264.345 96.250 C 264.911 95.335,257.327 95.243,255.679 96.146 M218.000 116.885 C 218.000 117.922,216.861 119.517,215.468 120.429 C 214.076 121.341,213.182 122.486,213.483 122.972 C 213.783 123.458,211.796 125.740,209.066 128.041 C 206.336 130.343,203.967 132.784,203.802 133.466 C 203.636 134.147,196.075 141.762,187.000 150.388 C 177.925 159.013,165.206 171.792,158.736 178.785 C 152.267 185.778,144.617 193.662,141.736 196.303 C 138.856 198.945,136.500 201.553,136.500 202.099 C 136.500 202.646,133.735 205.659,130.355 208.796 C 126.975 211.933,119.004 219.955,112.643 226.621 C 106.281 233.288,100.796 238.463,100.455 238.121 C 100.113 237.780,99.980 237.950,100.159 238.500 C 100.627 239.939,97.463 244.130,96.577 243.244 C 96.168 242.835,95.983 242.980,96.167 243.568 C 96.511 244.672,90.487 252.154,89.804 251.470 C 89.592 251.259,89.351 251.996,89.267 253.109 C 89.183 254.222,88.583 257.690,87.933 260.816 C 87.284 263.942,86.752 267.504,86.751 268.732 C 86.750 269.959,86.469 270.789,86.125 270.576 C 84.947 269.846,85.891 298.164,87.093 299.612 C 87.971 300.670,87.919 301.402,86.872 302.692 C 85.940 303.842,85.901 304.143,86.750 303.633 C 87.571 303.140,88.000 303.520,88.000 304.742 C 88.000 308.257,90.368 311.610,94.150 313.449 C 96.233 314.462,97.700 315.676,97.410 316.146 C 97.120 316.616,97.359 317.000,97.941 317.000 C 98.523 317.000,99.000 316.598,99.000 316.106 C 99.000 315.595,100.818 315.632,103.250 316.193 C 105.588 316.732,113.125 316.923,120.000 316.618 C 138.404 315.801,140.426 315.599,141.250 314.500 C 141.720 313.873,142.367 314.059,142.985 315.000 C 143.526 315.825,143.976 315.989,143.985 315.364 C 143.993 314.739,145.486 313.523,147.303 312.661 C 149.119 311.799,151.429 310.183,152.436 309.070 C 153.443 307.958,154.581 307.241,154.963 307.477 C 155.346 307.714,158.063 305.474,161.000 302.500 C 163.937 299.526,166.651 297.284,167.031 297.519 C 167.411 297.754,172.841 292.446,179.097 285.723 C 185.353 279.000,203.078 260.871,218.486 245.436 C 249.498 214.369,275.931 185.504,277.559 180.927 C 278.141 179.290,279.026 178.299,279.526 178.725 C 280.025 179.151,279.868 178.756,279.175 177.847 C 278.160 176.515,278.167 176.110,279.208 175.758 C 280.064 175.468,279.235 173.916,276.750 171.158 C 274.688 168.868,273.000 167.233,273.000 167.524 C 273.000 167.816,265.688 160.711,256.750 151.736 C 247.813 142.761,236.289 131.851,231.142 127.491 C 225.996 123.131,221.394 118.537,220.917 117.282 C 219.868 114.522,218.000 114.268,218.000 116.885 "
                          stroke="none"
                        ></path>
                      </g>
                    </EditSvg>
                  </div>
                  <Text fontSize="5">
                    {userInfo.selIdx === 0 ? <>프로필 관리</> : <>이름 수정</>}
                  </Text>
                </BottomInnerThree>
                {/* ) : (
                  <></>
                )} */}

                <BottomInnerThree>
                  <div>
                    <svg
                      id="story"
                      width="25"
                      height="25"
                      viewBox="0, 0, 400,400"
                      fill="white"
                    >
                      <g id="svgg">
                        <path
                          id="path0"
                          d="M240.500 92.024 C 236.511 92.817,202.877 95.009,164.000 97.010 C 118.715 99.341,118.537 99.360,121.865 101.417 C 122.341 101.711,122.592 103.200,122.424 104.726 C 120.563 121.558,121.476 217.343,123.545 222.387 C 124.436 224.559,129.172 224.445,161.000 221.485 C 189.670 218.820,211.065 218.179,210.573 220.000 C 210.350 220.825,209.863 223.750,209.490 226.500 C 207.158 243.709,194.850 264.523,177.108 281.259 C 169.652 288.292,169.130 289.000,171.392 289.000 C 172.157 289.000,173.049 290.012,173.373 291.250 C 173.697 292.488,176.961 298.225,180.626 304.000 C 184.291 309.775,187.909 315.691,188.667 317.147 C 191.536 322.663,199.773 320.718,217.509 310.337 C 240.085 297.122,253.969 268.832,253.993 236.000 C 253.997 229.611,255.148 218.334,257.002 206.500 C 258.550 196.623,255.004 98.871,252.894 93.250 C 251.971 90.792,248.457 90.444,240.500 92.024 "
                          stroke="none"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <Text fontSize="5">가가오 스토리</Text>
                </BottomInnerThree>
              </ModalContentBottomInnerWrap>
            </ModalContentBottom>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default ProfileModal;

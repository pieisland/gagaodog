import React from "react";
import styled from "styled-components";

const FriendsAddWrap = styled.div`
  width: 100%;
  height: 40px;
  //ackground-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FriendsAddInnerWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 0px;
  justify-content: space-between;
  //background-color: yellow;

  margin: 0 20px;
  align-items: center;
`;

const FriendsAdd = () => {
  return (
    <>
      <FriendsAddWrap>
        <FriendsAddInnerWrap>
          <div>친구</div>
          <div>
            <svg width="30" height="30" viewBox="0, 0, 400,400">
              <g id="svgg">
                <path
                  id="path0"
                  d="M70.000 101.167 C 50.571 112.140,37.609 133.928,41.437 149.179 C 45.464 165.227,59.607 166.912,81.683 153.974 C 91.758 148.070,100.000 143.990,100.000 144.907 C 100.000 145.824,97.067 155.182,93.483 165.701 C 89.064 178.670,87.682 191.766,89.191 206.384 C 90.700 221.003,89.579 231.623,85.710 239.380 C 68.569 273.739,92.654 288.031,164.347 286.041 C 193.856 285.222,227.900 284.467,240.000 284.362 C 276.972 284.041,304.411 253.745,285.163 234.496 C 283.603 232.936,282.766 224.986,283.303 216.830 C 284.385 200.420,274.211 157.484,267.255 149.102 C 261.716 142.428,278.440 148.173,293.744 158.200 C 321.806 176.587,335.667 145.566,311.625 118.184 C 289.786 93.310,259.884 84.428,242.004 97.503 C 236.633 101.430,230.983 102.003,222.266 99.503 C 204.197 94.320,163.459 95.362,152.000 101.299 C 143.497 105.704,139.604 105.409,126.000 99.328 C 104.640 89.780,89.270 90.285,70.000 101.167 M130.714 109.958 C 141.626 115.402,144.211 115.412,154.479 110.058 C 167.556 103.238,203.429 102.100,223.539 107.868 C 233.826 110.818,239.012 110.344,245.403 105.868 C 268.008 90.034,316.000 118.252,316.000 147.378 C 316.000 158.395,312.593 158.217,289.616 146.000 C 258.323 129.362,254.875 132.819,266.043 169.636 C 269.319 180.435,272.000 199.679,272.000 212.400 C 272.000 225.120,273.800 236.640,276.000 238.000 C 295.824 250.252,270.763 273.733,236.579 274.935 C 221.961 275.449,188.400 276.619,162.000 277.535 C 103.950 279.548,92.207 275.314,92.061 252.315 C 92.028 246.988,94.843 239.488,98.319 235.648 C 103.462 229.964,103.751 227.009,99.871 219.759 C 93.674 208.179,96.603 173.634,105.254 156.294 C 117.242 132.263,107.165 128.697,77.084 146.325 C 49.471 162.508,36.704 147.739,57.020 123.115 C 76.202 99.865,101.448 95.358,130.714 109.958 M328.000 193.572 C 328.000 207.909,323.043 212.000,305.673 212.000 C 300.353 212.000,296.000 213.800,296.000 216.000 C 296.000 218.200,303.007 220.000,311.572 220.000 C 328.819 220.000,332.000 224.100,332.000 246.327 C 332.000 253.847,333.800 260.000,336.000 260.000 C 338.200 260.000,340.000 250.203,340.000 238.230 L 340.000 216.460 357.000 215.230 C 366.350 214.553,373.471 212.200,372.824 210.000 C 372.177 207.800,363.627 206.540,353.824 207.200 L 336.000 208.401 336.000 194.200 C 336.000 186.390,334.200 180.000,332.000 180.000 C 329.800 180.000,328.000 186.107,328.000 193.572 M143.971 310.973 C 136.626 320.282,120.000 375.976,120.000 391.272 C 120.000 409.603,126.852 398.805,132.897 370.949 C 136.365 354.971,142.314 334.721,146.118 325.949 L 153.034 310.000 189.257 310.059 L 225.481 310.119 240.740 347.772 C 249.133 368.481,256.000 388.704,256.000 392.712 C 256.000 396.721,258.700 400.000,262.000 400.000 C 271.770 400.000,263.225 369.922,240.958 325.936 L 228.841 302.000 189.946 302.000 C 154.416 302.000,150.439 302.776,143.971 310.973 "
                  stroke="none"
                ></path>
              </g>
            </svg>
          </div>
        </FriendsAddInnerWrap>
      </FriendsAddWrap>
    </>
  );
};
export default FriendsAdd;

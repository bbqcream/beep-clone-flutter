import styled from "styled-components/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  width: ${wp(80)}px;
  height: ${hp(80) / 4}px;
  background-color: #fff;
  margin: ${wp(10)}px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  width: ${hp(3)}px;
  height: ${hp(3)}px;
  background-color: #9d71fe;
  border-radius: 4px;
  margin-horizontal: ${wp(3)}px;
`;

export const Circle = styled.View`
  margin-left: ${wp(35)}px;
  width: ${hp(2)}px;
  height: ${hp(2)}px;
  background-color: #8d71fe;
  border-radius: 100px;
  margin-horizontal: ${wp(3)}px;
`;

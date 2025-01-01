import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #323a45;
`;

export const TopContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35%;
`;

export const ArrowTouch = styled.TouchableOpacity`
  left: 10%;
  top: 10%;
  position: absolute;
`;

export const Arrow = styled.Image``;

export const TitleWrapper = styled.View`
  display: flex;
  width: 140px;
  height: 149px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: white;
`;

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 15px;
`;

export const BottomContainer = styled.View`
  width: 100%;
  height: 70%;
  background-color: white;
  display: flex;
  align-items: center;
  padding-top: 20%;
  gap: 42px;
`;

export const LoginInput = styled.TextInput`
  width: 100%;
  height: 66px;
  border: 1px solid #c9c9c9;
  padding-left: 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 60px;
  background-color: #303a46;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  background-color: #303a46;
  text-align: center;
  font-size: 20px;
`;

export const MoreLoginView = styled.View`
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
`;

export const MoreLogin = styled.Text`
  font-size: 14px;
  color: #b2b2b2;
`;

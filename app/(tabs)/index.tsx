import React from "react";
import * as S from "./indexStyle";
import { Button } from "react-native";

export default function HomeScreen() {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Arrow source={require("../../assets/images/arrow.png")} />
        <S.TitleWrapper>
          <S.Logo source={require("../../assets/images/logo.png")} />
          <S.SubTitle>스마트한 관리</S.SubTitle>
        </S.TitleWrapper>
      </S.TopContainer>
      <S.BottomContainer>
        <S.InputWrapper>
          <S.LoginInput placeholder="안녕" />
          <S.LoginInput placeholder="비밀번호" secureTextEntry={true} />
        </S.InputWrapper>
        <Button title="로그인" onPress={() => alert("로그인 버튼 클릭됨")} />
      </S.BottomContainer>
    </S.Container>
  );
}

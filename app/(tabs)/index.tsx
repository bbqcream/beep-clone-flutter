import React from "react";
import * as S from "./indexStyle";

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
          <S.LoginInput placeholder="아이디" />
          <S.LoginInput placeholder="비밀번호" secureTextEntry={true} />
        </S.InputWrapper>
        <S.Button onPress={() => alert("로그인 버튼 클릭됨")}>
          <S.ButtonText>로그인</S.ButtonText>
        </S.Button>
        <S.MoreLoginView>
          <S.MoreLogin>아이디나 비밀번호를 잃어버리셨나요?</S.MoreLogin>
        </S.MoreLoginView>
      </S.BottomContainer>
    </S.Container>
  );
}

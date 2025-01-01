import React from "react";
import * as S from "../../style/home";
import { StyleSheet } from "react-native";

export default function Start() {
  return (
    <S.Container>
      <S.Button onPress={() => alert("로그인에 성공했습니다.")}>
        <S.ButtonText>로그인</S.ButtonText>
      </S.Button>
      <S.Button onPress={() => alert("로그인에 성공했습니다.")}>
        <S.ButtonText>회원가입</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

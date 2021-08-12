import React from 'react'
import * as S from "./Logo.style";
import logo from "assets/images/logo.png";

// logo Image

export default function Logo() {
  return (
    <S.Container>
      <S.Img src={logo} alt="Logo" />
    </S.Container>
  );
}

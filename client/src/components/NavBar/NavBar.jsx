import React from "react";
import * as S from "./NavBar.style";

export default function NavBar({ setActive, active }) {
  function click() {
    setActive(!active);
  }
  return (
    <S.Container onClick={click}>
      <S.Line></S.Line>
      <S.Line width="17px"></S.Line>
    </S.Container>
  );
}

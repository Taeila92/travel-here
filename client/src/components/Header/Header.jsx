import React from "react";
import { useMediaQuery } from "react-responsive";
import NavLinks from "components/NavLinks/NavLinks";
import NavBar from "components/NavBar/NavBar";
import * as S from "./Header.style";


export default function Header({ isLoggedIn }) {
  const isPc = useMediaQuery({
    query : `(min-width : 1024px) and (max-width :1920px)`
  })
  console.log(isPc);

  return (
    <S.Header isPc={isPc}>
      <NavLinks isLoggedIn={isLoggedIn} isPc={isPc} />
      <NavBar isPc={isPc}/>
    </S.Header>
  );
}

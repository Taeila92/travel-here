import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavBar from "../NavBar/NavBar";
import * as S from "./Header.style";
import { useState } from "react";
export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <S.Header>
      <div className="logo">
        <Logo />
      </div>
      <NavLinks active={active} />
      <NavBar setActive={setActive} active={active} />
    </S.Header>
  );
}

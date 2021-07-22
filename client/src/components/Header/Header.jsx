import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavBar from "../NavBar/NavBar";
import * as S from "./Header.style";
import { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
export default function Header() {
  const width = useWindowWidth();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (width > 770) {
      setActive(false);
    }
  }, [width]);

  return (
    <S.Header active={active}>
      <div className="logo">
        <Logo />
      </div>
      <NavLinks active={active} />
      <NavBar setActive={setActive} active={active} />
    </S.Header>
  );
}

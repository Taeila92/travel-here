import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavBar from "../NavBar/NavBar";
import * as S from "./Header.style";
export default function Header() {
  return (
    <S.Header>
      <div className="logo">
        <Logo />
      </div>
      <NavLinks />
      <NavBar />
    </S.Header>
  );
}

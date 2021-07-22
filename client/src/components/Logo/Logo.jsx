import * as S from "./Logo.style";

// logo Image
import logo from "../../assets/images/logo.png";
export default function Logo() {
  return (
    <S.Container>
      {/* <S.Img src="assets/images/logo.png" alt="Logo" /> */}
      <S.Img src={logo} alt="Logo" />
    </S.Container>
  );
}

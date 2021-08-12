import * as S from "./WriteBtn.style";

export default function WriteBtn({ isVisible }) {
  return <S.Button onClick={isVisible} />;
}

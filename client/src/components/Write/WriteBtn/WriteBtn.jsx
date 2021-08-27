import { useHistory } from 'react-router-dom';
import * as S from "./WriteBtn.style";


export default function WriteBtn({ isVisible }) {
  const history = useHistory();
  const movePage = () => {
    history.push({
      pathname: "/WriteModal",
    })
  }

  const onClick = () => {
    // isVisible;
    movePage();
  }
  return <S.Button onClick={onClick} />
}



import { useHistory } from 'react-router-dom';
import * as S from "./WriteBtn.style";


export default function WriteBtn({ visible, isVisible }) {
  const history = useHistory();
  const movePage = () => {
    history.push({
      pathname: "/WriteModal",
      // state: {isVisible},
    })
  }

  const onClick = () => {
    movePage();
  }
  return <S.Button onClick={isVisible} title={"게시글 쓰기"}/>
}



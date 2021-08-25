import React from 'react';
import * as S from "./Post.style";
import blur from "assets/images/blur.png";
import { useHistory } from "react-router-dom";

const NoneMember = ({ setIsPostOpened }) => {

  let history = useHistory();

  const onLogin = () => {
    history.push({
      pathname: "/login",
    });
  }

  const onClose = () => {
    setIsPostOpened(false);
    history.push({
      search: '',
    });
  }
  return (
    <S.Container>
      <S.Img src={blur} alt="비회원"></S.Img>
      <S.Alert>
        <p>로그인 후 이용 가능한 서비스입니다.</p>
        <p>로그인 하시겠습니까?</p>
        <button onClick={onLogin}>로그인하고 전체보기</button>
        <button onClick={onClose}>나가기</button>
      </S.Alert>
    </S.Container>
  );
}

export default NoneMember;
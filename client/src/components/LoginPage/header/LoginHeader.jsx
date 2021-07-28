import React from 'react';
import * as S from './LoginHeader.style';

function LoginHeader() {
  return (
    <>
      <S.Header>
        <S.Ul>
          <S.Li>
            <S.H1 className="title">로그인</S.H1>
          </S.Li>
          <S.Li>
            <S.Form action="">
              <S.Input type="text" className="id" placeholder="Email Address" />
              <S.Input type="password" className="pw" placeholder="Password" />
            </S.Form>
          </S.Li>
          <S.Li>
            <S.Button className="login">Log in</S.Button>
          </S.Li>
        </S.Ul>
        <S.Span className="qus">패스워드 찾기</S.Span>
        <S.Span className="singUp">회원 가입</S.Span>
      </S.Header>
    </>
  );
}

export default LoginHeader;

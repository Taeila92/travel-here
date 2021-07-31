import React from 'react';
import * as S from './LoginModalOpen.style';
import LoginHeader from 'components/LoginModal/header/LoginHeader';
import LoginFooter from 'components/LoginModal/footer/LoginFooter';
import AuthService from 'auth_service';

function LoginModalOpen() {
  const authService = new AuthService();

  return (
    <>
      <S.LoginBg></S.LoginBg>
      <S.Logincontainer>
        <LoginHeader authService={authService} />
        <LoginFooter authService={authService} />
      </S.Logincontainer>
    </>
  );
}

export default LoginModalOpen;

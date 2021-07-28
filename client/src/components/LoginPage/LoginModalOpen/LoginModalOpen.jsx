import React from 'react';
import * as S from './LoginModalOpen.style';
import LoginHeader from '../header/LoginHeader';
import LoginFooter from '../footer/LoginFooter';
import AuthService from '../../../auth_service';

function LoginModalOpen() {
  const authService = new AuthService();

  return (
    <>
      <S.LoginBg className="login-bg"></S.LoginBg>
      <S.Logincontainer className="login-container">
        <LoginHeader />
        <LoginFooter authService={authService} />
      </S.Logincontainer>
    </>
  );
}

export default LoginModalOpen;

import React from 'react';
import * as S from './LoginHelp.style';
import firebaseService from 'firebase';

function LoginHelp() {
  // const handlePassReset = (e) => {
  //   e.preventDefault();
  //   firebaseService
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       console.log('Password reset email sent!');
  //     })
  //     .catch((err) => {
  //       setEmailError(err.code);
  //       setPasswordError(err.message);
  //     });
  // };
  return (
    <>
      <S.LoginBg />
      <S.Logincontainer>
        <S.Header>
          <ul>
            <li>
              <h1>이메일/비밀번호 찾기</h1>
            </li>

            <li>
              <input
                className="inputEmail"
                type="email"
                autoFocus
                required
                placeholder="Email Address"
              />
              <li>
                <button className="loginBtn">찾기</button>
              </li>
            </li>
          </ul>
        </S.Header>
      </S.Logincontainer>
    </>
  );
}

export default LoginHelp;

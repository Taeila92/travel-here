import React, { useEffect, useState } from 'react';
import * as S from './LoginHeader.style';
import firebaseService from 'firebase';
import Hero from 'components/LoginModal/Hero/Hero';

function LoginHeader({ authService }) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  // 로그인
  const handleLogin = () => {
    clearErrors();
    firebaseService
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  // 회원가입
  const handleSignUP = () => {
    clearErrors();
    firebaseService
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  // 로그아웃
  const handleLogout = () => {
    firebaseService.auth().signOut();
  };

  const authListener = () => {
    firebaseService.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <S.Header>
          <S.Ul>
            {hasAccount ? (
              <>
                <S.Li>
                  <S.H1>로그인</S.H1>
                </S.Li>

                <S.Li>
                  <S.InputEmail
                    type="text"
                    autoFocus
                    required
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <S.errMSG className="errorMsg">{emailError}</S.errMSG>
                  <S.InputPw
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <S.errMSG className="errorMsg">{passwordError}</S.errMSG>
                  <S.Li>
                    <S.Button onClick={handleLogin}>Sign in</S.Button>
                    <S.P>
                      Don't have an account ?
                      <S.Span onClick={() => setHasAccount(!hasAccount)}>
                        Sign Up
                      </S.Span>
                    </S.P>
                  </S.Li>
                </S.Li>
              </>
            ) : (
              <>
                <S.Li>
                  <S.H1>회원가입</S.H1>
                </S.Li>

                <S.Li>
                  <S.InputEmail
                    type="text"
                    autoFocus
                    required
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <S.errMSG className="errorMsg">{emailError}</S.errMSG>
                  <S.InputPw
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <S.errMSG className="errorMsg">{passwordError}</S.errMSG>
                  <S.Li>
                    <S.Button onClick={handleSignUP}>Sign up</S.Button>
                    <S.P>
                      Have an account ?
                      <S.Span onClick={() => setHasAccount(!hasAccount)}>
                        Sign in
                      </S.Span>
                    </S.P>
                  </S.Li>
                </S.Li>
              </>
            )}
          </S.Ul>
        </S.Header>
      )}
    </>
  );
}

export default LoginHeader;

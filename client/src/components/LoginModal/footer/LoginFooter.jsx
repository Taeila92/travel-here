import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './LoginFooter.style';

function LoginFooter({ authService }) {
  const history = useHistory();

  const goToLogin = (userId) => {
    history.push({
      pathname: '/logout',
      state: { id: userId },
    });
  };

  const routeChange = () => {
    let path = '/';
    history.push(path);
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToLogin(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToLogin(user.uid);
    });
  });

  return (
    <>
      <footer>
        <S.Ul>
          {/* Google button */}
          <S.Li>
            <S.Button onClick={onLogin}>
              <S.SignUpLogo>
                <i className="fab fa-google"></i>
              </S.SignUpLogo>
              <S.P>Google</S.P>
            </S.Button>
          </S.Li>
          {/* Github button*/}
          <S.Li>
            <S.Button onClick={onLogin}>
              <S.SignUpLogo>
                <i className="fab fa-github"></i>
              </S.SignUpLogo>
              <S.P>Github</S.P>
            </S.Button>
          </S.Li>
          {/* Facebook button */}
          <S.Li>
            <S.Button onClick={onLogin}>
              <S.SignUpLogo>
                <i className="fab fa-facebook-square"></i>
              </S.SignUpLogo>
              <S.P>Facebook</S.P>
            </S.Button>
          </S.Li>
        </S.Ul>
        <S.Arrow onClick={routeChange}>
          <i className="fas fa-arrow-left"></i>
        </S.Arrow>
      </footer>
    </>
  );
}

export default LoginFooter;

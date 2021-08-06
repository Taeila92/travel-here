import * as S from './LoginHeader.style';
import { useHistory } from 'react-router-dom';
import NavLinks from 'components/NavLinks/NavLinks';

function LoginHeader(props) {
  const {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUP,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout,
  } = props;

  const history = useHistory();

  const routeChange = (user) => {
    history.push({
      pathname: '/logout',
      state: { id: user },
    });
  };

  return (
    <>
      {user ? (
        <NavLinks handleLogout={handleLogout} />
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

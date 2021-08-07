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
          <ul>
            {hasAccount ? (
              <>
                <li>
                  <h1>로그인</h1>
                </li>

                <li>
                  <input
                    className="inputEmail"
                    type="text"
                    autoFocus
                    required
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="errorMsg">{emailError}</p>
                  <input
                    className="inputPw"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <p className="errorMsg">{passwordError}</p>
                  <li>
                    <button className="loginBtn" onClick={handleLogin}>
                      Sign in
                    </button>
                    <p>
                      Don't have an account ?
                      <button
                        className="logoutBtn"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Sign Up
                      </button>
                    </p>
                  </li>
                </li>
              </>
            ) : (
              <>
                <li>
                  <h1>회원가입</h1>
                </li>

                <li>
                  <input
                    className="inputEmail"
                    type="text"
                    autoFocus
                    required
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="errorMsg">{emailError}</p>
                  <input
                    className="inputPw"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <p className="errorMsg">{passwordError}</p>
                  <li>
                    <button className="loginBtn" onClick={handleSignUP}>
                      Sign up
                    </button>
                    <p>
                      Have an account ?
                      <button
                        className="logoutBtn"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Sign in
                      </button>
                    </p>
                  </li>
                </li>
              </>
            )}
          </ul>
        </S.Header>
      )}
    </>
  );
}

export default LoginHeader;

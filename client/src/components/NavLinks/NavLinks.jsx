import { NavLink } from 'react-router-dom';
import * as S from './NavLinks.style';
import styled from 'styled-components';
import AuthService from 'auth_service';
import Logo from 'components/Logo/Logo';
import NavBar from 'components/NavBar/NavBar';
import { useState } from 'react';
import 'firebase/auth';

const StyledNav = styled(NavLink)`
  transition: 0.2s;
  padding: 10px 40px 10px;
  color: white;
`;

// function setPersistenceSession() {
//   const email = '...';
//   const password = '...';

//   firebase
//     .auth()
//     .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//     .then(() => {
//       return firebase.auth().signInWithEmailAndPassword(email, password);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// }

// 로그아웃
const authService = new AuthService();
const onLogout = () => {
  authService.logout();
};

const activeStyle = { color: 'red' };
export default function NavLinks({ active, setActive, isLoggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <S.Header active={active}>
        <div className="logo">
          <Logo />
        </div>
        <S.Container active={active}>
          <S.Ul>
            <S.Li>
              <StyledNav to="/" activeStyle={activeStyle} exact>
                Home
              </StyledNav>
            </S.Li>
            <S.Li>
              <StyledNav to="/CategoryList" activeStyle={activeStyle} exact>
                Blog
              </StyledNav>
            </S.Li>
            {isLoggedIn ? (
              <>
                <S.Li>
                  <StyledNav to="/Logout" activeStyle={activeStyle} exact>
                    <S.Button onClick={onLogout}>Logout</S.Button>
                  </StyledNav>
                </S.Li>
              </>
            ) : (
              <>
                <S.Li>
                  <StyledNav to="/Login" activeStyle={activeStyle} exact>
                    Login
                  </StyledNav>
                </S.Li>
              </>
            )}
          </S.Ul>
        </S.Container>
        <NavBar setActive={setActive} active={active} />
      </S.Header>
    </>
  );
}

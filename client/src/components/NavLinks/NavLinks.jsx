import { NavLink } from "react-router-dom";
import * as S from "./NavLinks.style";
import styled from "styled-components";
import AuthService from "auth_service";
import Logo from "components/Logo/Logo";
import "firebase/auth";

const StyledNav = styled(NavLink)`
  transition: 0.2s;
  padding: 10px 40px 10px;
  color: white;
`;

// 로그아웃
const authService = new AuthService();
const onLogout = () => {
  authService.logout();
};

const activeStyle = { color: "red" };
export default function NavLinks({ active, isLoggedIn }) {
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
              <StyledNav to="/categoryList" activeStyle={activeStyle} exact>
                Blog
              </StyledNav>
            </S.Li>
            {isLoggedIn ? (
              <>
                <S.Li>
                  <StyledNav to="/" activeStyle={activeStyle} exact>
                    <S.Button onClick={onLogout}>Logout</S.Button>
                  </StyledNav>
                </S.Li>
              </>
            ) : (
              <>
                <S.Li>
                  <StyledNav to="/login" activeStyle={activeStyle} exact>
                    Login
                  </StyledNav>
                </S.Li>
              </>
            )}
          </S.Ul>
        </S.Container>
      </S.Header>
    </>
  );
}

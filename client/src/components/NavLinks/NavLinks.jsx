import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { openNav, closeNav } from 'store/modules/nav';
import * as S from "./NavLinks.style";
import AuthService from "auth_service";
import "firebase/auth";
import Logo from 'components/Logo/Logo';


// 로그아웃
const authService = new AuthService();
const onLogout = () => {
  authService.logout();
};

const activeStyle = { color: "red" };

export default function NavLinks({ isLoggedIn, isPc }) {
  
  const {isNavOpened} = useSelector(state => state.nav);
  const dispatch = useDispatch();
  
  const navToggle = () => {
    if(isNavOpened){
      dispatch(closeNav())
    } else {
      dispatch(openNav())
    }
  }

  return (
    <S.Header isPc={isPc} isNavOpened={isNavOpened}>
      <Logo></Logo>
      <S.Container isPc={isPc} isNavOpened={isNavOpened}>
        <S.Ul>
          <S.Li>
            <S.StyledNav onClick={navToggle} to="/" activeStyle={activeStyle} exact>
              Home
            </S.StyledNav>
          </S.Li>
          <S.Li>
            <S.StyledNav onClick={navToggle} to="/CategoryList" activeStyle={activeStyle} exact>
              Blog
            </S.StyledNav>
          </S.Li>
          {isLoggedIn ? (
            <>
              <S.Li>
                <S.StyledNav to="/" activeStyle={activeStyle} exact>
                  <S.Button onClick={onLogout}>Logout</S.Button>
                </S.StyledNav>
              </S.Li>
            </>
          ) : (
            <>
              <S.Li>
                <S.StyledNav to="/login" activeStyle={activeStyle} exact>
                  Login
                </S.StyledNav>
              </S.Li>
            </>
          )}
        </S.Ul>
      </S.Container>
    </S.Header>
  );
}

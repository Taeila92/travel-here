import { NavLink, useHistory } from 'react-router-dom';
import * as S from './Logout.style';
import styled from 'styled-components';
import { useEffect } from 'react';
import AuthService from 'auth_service';

function LogoutPage({ active }) {
  const authService = new AuthService();
  const StyledNav = styled(NavLink)`
    transition: 0.2s;
    padding: 10px 40px 10px;
    color: white;
  `;

  const activeStyle = { color: 'red' };

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
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
        <S.Li>
          {/* <StyledNav to="/" activeStyle={activeStyle} exact> */}
          <button onClick={onLogout}>Logout</button>
          {/* </StyledNav> */}
        </S.Li>
      </S.Ul>
    </S.Container>
  );
}

export default LogoutPage;

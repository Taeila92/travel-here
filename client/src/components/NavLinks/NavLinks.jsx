import React from 'react'
import { useSelector } from 'react-redux';
import * as S from "./NavLinks.style";


const activeStyle = { color: "red" };

export default function NavLinks({ isPc }) {
  const {isNavOpened} = useSelector(state => state.nav);

  return (
    
    <S.Container isPc={isPc} isNavOpened={isNavOpened}>
      <S.Ul>
        <S.Li>
          <S.StyledNav to="/" activeStyle={activeStyle} exact>
            Home
          </S.StyledNav>
        </S.Li>
        <S.Li>
          <S.StyledNav to="/CategoryList" activeStyle={activeStyle} exact>
            Blog
          </S.StyledNav>
        </S.Li>
        <S.Li>
          <S.StyledNav to="/Login" activeStyle={activeStyle} exact>
            Login
          </S.StyledNav>
        </S.Li>
      </S.Ul>
    </S.Container>
  );
}

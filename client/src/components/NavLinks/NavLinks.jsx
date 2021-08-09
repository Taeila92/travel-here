import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { openNav, closeNav } from 'store/modules/nav';
import * as S from "./NavLinks.style";


const activeStyle = { color: "red" };

export default function NavLinks({ isPc }) {
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
        <S.Li>
          <S.StyledNav onClick={navToggle} to="/Login" activeStyle={activeStyle} exact>
            Login
          </S.StyledNav>
        </S.Li>
      </S.Ul>
    </S.Container>
  );
}

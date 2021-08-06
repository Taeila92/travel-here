import NavLinks from 'components/NavLinks/NavLinks';
import NavBar from 'components/NavBar/NavBar';
import * as S from './Header.style';
import { useEffect, useState } from 'react';
import useWindowWidth from 'hooks/useWindowWidth';
import { useHistory } from 'react-router-dom';
import AuthService from 'auth_service';

export default function Header({ onLogout }) {
  const width = useWindowWidth();
  const [active, setActive] = useState(false);
  const authService = new AuthService();

  const history = useHistory();
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  useEffect(() => {
    if (width > 770) {
      setActive(false);
    }
  }, [width]);

  return (
    <S.Header active={active}>
      <NavLinks onLogout={onLogout} active={active} />
      <NavBar setActive={setActive} active={active} />
    </S.Header>
  );
}

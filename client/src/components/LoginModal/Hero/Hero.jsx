import React from 'react';
import * as S from './Hero.style';

const Hero = ({ handleLogout }) => {
  return (
    <S.Section>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </S.Section>
  );
};

export default Hero;

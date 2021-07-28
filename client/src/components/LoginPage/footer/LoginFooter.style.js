import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  @media screen and (max-width: 740px) {
    width: 55%;
    height: 2.5em;
    border: 1px solid;
    margin: auto;
    margin-bottom: 1.5em;
    border-radius: 12px;
    background-color: whitesmoke;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`;

const SignUpLogo = styled.span`
  font-size: 32px;
`;

const P = styled.p`
  display: inline-block;
`;

const Arrow = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  top: 1em;
  left: 1em;
`;

export { Li, Ul, Button, P, SignUpLogo, Arrow };

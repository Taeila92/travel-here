import styled from 'styled-components';

const Logincontainer = styled.div`
  /* display: none; */
  width: 480px;
  height: 621px;
  background-color: #fffaf0;
  position: relative;
  margin: 50px auto;
  padding: 20px;
  z-index: 100;
  padding: 60px 68px 40px 68px;
  @media screen and (max-width: 740px) {
    width: 100vw;
    margin: 0;
    height: 100vh;
    padding: 1em;
  }
`;

const LoginBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 740px) {
    opacity: 0;
  }
`;

export { Logincontainer, LoginBg };

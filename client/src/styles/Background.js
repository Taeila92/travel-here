import styled from "styled-components";
import background from "../assets/images/background.jpeg";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const bgBlur = styled.div`
  height: 100vh;
  background-color: rgb(0,0,0,0);
  @media screen and (max-width: 900px) {
    background-color: rgb(0,0,0,0.5);
  }
`;

export { Background, bgBlur };

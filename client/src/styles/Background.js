import styled from "styled-components";
import background from "../assets/images/background.jpeg";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export { Background };

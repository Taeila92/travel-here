import styled from "styled-components";
import background from "../assets/images/background.jpeg";

const Background = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export { Background };

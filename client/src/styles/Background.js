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
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    background-color: rgb(0, 0, 0, 0);
    @media screen and (max-width: 900px) {
      background-color: rgb(0, 0, 0, 0.5);
    }
  }
`;

export { Background };

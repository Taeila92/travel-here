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

const Content = styled.section`
  width: 100vw;
  height: calc(100vh - 55px);
  position: absolute;
  top: 55px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export { Background, Content };

import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  height: 40vh;
  background-color: white;
  border-radius: 0.5rem;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: calc(-40vh / 2);
  margin-left: calc(-50vw / 2);
  z-index: 100;
  overflow: auto;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export { Container, Overlay };

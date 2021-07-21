import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding-top: 4px;

  @media screen and (max-width: 770px) {
    background-color: rgba(0, 0, 0, 0.5);
    padding-right: 20px;
    height: 100vh;
    display: inherit;
    transform: translateX(430px);
  }
`;
const Ul = styled.ul`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;
const Li = styled.li`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Ul, Li };

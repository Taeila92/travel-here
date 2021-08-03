import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding-top: 4px;
  @media screen and (max-width: 900px) {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 150px;
    padding-right: 20px;
    transition: 0.3s;
    transform: ${(props) => (props.active ? 0 : "translateY(-150px)")};
  }
`;

const Ul = styled.ul`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Li = styled.li`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Ul, Li };

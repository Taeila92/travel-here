import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  display: none;
  z-index: 9;
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

const Line = styled.div`
  margin: 3px 0;
  width: ${(props) => props.width || "30px"};
  height: 5px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid white;
  margin-right: 10px;
`;

export { Container, Line };

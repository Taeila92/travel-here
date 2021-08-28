import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 180px;
  height: 55px;
  overflow: hidden;
  `;

const Img = styled.img`
  position: absolute;
  top: -63px;
  width: 180px;
  :hover {
    cursor: pointer;
  }
`;

export { Container, Img };

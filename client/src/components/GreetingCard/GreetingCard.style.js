import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  margin-top: calc(-286px / 2);
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;
const H2 = styled.h2`
  font-weight: 700;
  font-size: 250px;
  color: white;
  text-align: center;
  @media screen and (max-width: 770px) {
    font-size: 150px;
  }
`;
const P = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: white;
  text-align: center;
  @media screen and (max-width: 770px) {
    font-size: 20px;
  }
`;

export { Container, H2, P };

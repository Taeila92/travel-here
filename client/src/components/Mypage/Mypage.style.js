import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Content = styled.ul`
  background-color: white;
  width: 30rem;
  height: 40rem;
  margin: 0 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;


export { Container, Content };
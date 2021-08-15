import styled from 'styled-components';

const Container = styled.section`
  /* background-color: black; */
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

const Info = styled.div`

`;

const Post = styled.div`

`;

const Comment = styled.div`

`;

const Bookmark = styled.div`

`;

export { Container, Content, Info, Post, Comment, Bookmark };
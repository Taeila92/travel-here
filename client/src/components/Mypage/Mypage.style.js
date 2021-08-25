import styled from 'styled-components';
import { flex, marginTop, fontSize, hideScrollbar, cursorPointer, frame } from "./styleConstatns";


const Container = styled.section`
  width: 100vw;
  height: 100vh;
  ${flex};
  flex-direction: row;
  caret-color: transparent;
`;

const Contents = styled.div`
  width: 20rem;
  height: 30rem;
  margin: 0 1rem;
  border-radius: 20px;
  ${flex};
  overflow: hidden;
  box-shadow: 0 0 4px #f40057;
  background-color: rgb(0, 0, 0, 0.5);
`;

const BackImage = styled.div`
  width: 100%;
  height: 10rem;
  ${flex};
  justify-content: flex-end;
  background-color: rgb(0, 0, 0, 0.3);
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    transform: translateY(2rem);
  }
  div {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    background-color: rgb(255, 255, 255, 0.1);
    color: white;
    width: 15rem;
    padding: 1rem;
    border-radius: 10px;
    transform: translateY(1.5rem);
  }
  span {
    color: white;
  }
  i {
    font-size: 5rem;
    color: white;
    background: darkgray;
    border-radius: 50%;
    transform: translateY(2rem);
  }
`;

const ListArea = styled.div`
  width: 100%;
  height: 20rem;
  ${flex};
  justify-content: flex-end;
  p {
    background-color: rgb(255, 255, 255, 0.1);
    color: white;
    width: 15rem;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    cursor: pointer;
    i {
      width: 1rem;
      margin-right: 0.7rem;
      color: rgb(255, 255, 255, 0.7);
    }
  }
  ul {
    width: 15rem;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.1);
    margin-bottom: 3rem;
    /* height: 10rem; */
    /* text-align: center; */
    /* border: 1px rgb(255, 255, 255, 0.2) solid; */
  }
  li {
    width: 13rem;
    padding: 1rem 0;
    margin: 0 1rem;
    color: white;
    cursor: pointer;
    i {
      width: 1rem;
      margin-right: 0.7rem;
      text-align: center;
      color: rgb(255, 255, 255, 0.7);
    }
  }
  li:nth-child(2) {
    border-top: 1px rgb(255, 255, 255, 0.2) solid;
    border-bottom: 1px rgb(255, 255, 255, 0.2) solid;
  }
`;

const Content = styled.ul`
  width: 20rem;
  height: 30rem;
  margin: 0 1rem;
  border-radius: 20px;
  ${flex};
  color: white;
  overflow: hidden;
  box-shadow: 0 0 4px #f40057;
  background-color: rgb(0, 0, 0, 0.5);
  ul {
    height: 25rem;
    overflow-y: scroll;
    ${hideScrollbar};
    li:nth-child(1){
      text-align: center;
      margin-bottom: 2rem;
      /* position: sticky;
      top: 0;
      width: 100%;
      background: transparent; */
    }
  }
`;


export { Container, Contents, Content, BackImage, ListArea };
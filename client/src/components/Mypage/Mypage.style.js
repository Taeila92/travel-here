import styled, { keyframes, css } from 'styled-components';
import {
  flex,
  marginTop,
  fontSize,
  hideScrollbar,
  cursorPointer,
  frame,
} from './styleConstatns';

const Container = styled.section`
  width: 100vw;
  height: 90vh;
  ${flex};
  flex-direction: row;
  caret-color: transparent;
  ${(props) => {
    if (props.isNavOpened) {
      return css`
        transform: ${(props) =>
          props.isNavOpened ? "translateY(50px)" : "translateY(0)"};
        transition: all 300ms ease-in-out;
      `;
    }
  }} 
  @media screen and (min-width: 1024px) {
    transform: translateY(0);
  }
`;

const leftShow = keyframes`
  from {
    transform: translateX(0rem);
  }
  to {
    transform: translateX(-10.5rem);
  }
`;

const leftClose = keyframes`
  from {
    transform: translateX(-10.5rem);
  }
  to {
    transform: translateX(0rem);
  }
`;

const Contents = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 20px;
  ${flex};
  overflow: hidden;
  box-shadow: 0 0 4px #f40057;
  background-color: rgb(0, 0, 0, 0.5);
  margin-bottom: 3rem;
  ${({ check }) => {
    if (check) {
      return css`
        transform: translateX(-10.5rem);
        animation: ${leftShow} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
    if (!check) {
      return css`
        animation: ${leftClose} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
  }}
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
    font-size: 1.2rem;
  }
  i {
    font-size: 2.5rem;
    color: white;
    background: darkgray;
    border-radius: 50%;
    transform: translateY(-3.5rem);
    /* transform: translateY(1rem); */
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

const rightShow = keyframes`
  from {
    transform: translateX(0rem);
    opacity: 0;
  }
  to {
    transform: translateX(10.5rem);
    opacity: 1;
  }
`;

const rightClose = keyframes`
  from {
    transform: translateX(10.5rem);
    opacity: 1;
  }
  to {
    transform: translateX(0rem);
    opacity: 0;
  }
`;

const Content = styled.ul`
  position: absolute;
  width: 20rem;
  height: 30rem;
  margin-bottom: 3rem;
  border-radius: 20px;
  ${flex};
  color: white;
  overflow: hidden;
  box-shadow: 0 0 4px #f40057;
  background-color: rgb(0, 0, 0, 0.5);
  animation: ${rightShow} 800ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  ${({ check }) => {
    if (check) {
      return css`
        transform: translateX(10.5rem);
        animation: ${rightShow} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
    if (!check) {
      return css`
        animation: ${rightClose} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
  }}
  ul {
    height: 25rem;
    overflow-y: scroll;
    ${hideScrollbar};
    li:nth-child(1) {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
`;

export { Container, Contents, Content, BackImage, ListArea };

import styled, { keyframes, css } from 'styled-components';
import { flex, hideScrollbar } from './styleConstatns';

const purple = "#D980FA";

const Container = styled.section`
  width: 100vw;
  height: 90vh;
  ${flex};
  flex-direction: row;
  caret-color: transparent;
  @media screen and (min-width: 1024px) {
    transform: translateY(0);
  }
`;

const leftclose = keyframes`
  from {
    transform: translateX(0rem);
  }
  to {
    transform: translateX(-10.5rem);
  }
`;

const leftshow = keyframes`
  from {
    transform: translateX(-10.5rem);
  }
  to {
    transform: translateX(0rem);
  }
`;


const show = keyframes`
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: flex;
    opacity: 1;
  }
`;

const Contents = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 20px;
  position: absolute;
  ${flex};
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0 0 4px ${purple};
  background-color: rgb(0, 0, 0, 0.5);
  margin-bottom: 5rem;
  ${({ check }) => {
    if (check) {
      return css`
        @media screen and (max-width: 740px) {
          animation: ${show} 800ms;
          display: none;
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        transform: translateX(-10.5rem);
        animation: ${leftclose} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
    if (!check) {
      return css`
        @media screen and (max-width: 740px) {
          animation: ${show} 800ms;
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        animation: ${leftshow} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
  }}
`;

const BackImage = styled.div`
  width: 100%;
  padding: 1rem 0;
  ${flex};
  flex-direction: row;
  background-color: rgb(0, 0, 0, 0.3);
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    /* transform: translateX(2.3rem); */
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
    font-size: 5rem;
    color: white;
    background: darkgray;
    border-radius: 50%;
    /* transform: translateX(2.3rem); */
  }
`;

const Title = styled.span`
  width: 12rem;
  word-break: break-all;
  line-height: 1.5;
  margin-left: 0.5rem;
  ${flex};
  ${(props) => {
    if (props.name.length >= 2) {
      return css`
        flex-direction: column;
      `;
    } else {
      return css`
        flex-direction: row;
      `;
    }
  }} 
  span:first-child{
    margin-right: 0.5rem;
    text-align: center;
  }
  span:last-child{
    font-size: 1.1rem;
  }
  b:first-child {
    color: #409BF0;
  }
  b:last-child {
    font-size: 1.1rem;
  }
`;

const ListArea = styled.div`
  width: 100%;
  height: 25rem;
  ${flex};
  justify-content: flex-end;
  margin-top: 1rem;
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
    margin-bottom: 2rem;
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
  li:nth-child(2n) {
    border-top: 1px rgb(255, 255, 255, 0.2) solid;
    border-bottom: 1px rgb(255, 255, 255, 0.2) solid;
  }
`;

const rightclose = keyframes`
  from {
    transform: translateX(0rem);
    opacity: 0;
  }
  to {
    transform: translateX(10.5rem);
    opacity: 1;
  }
`;

const rightshow1 = keyframes`
  from {
    transform: translateX(10.5rem);
    opacity: 1;
  }
  to {
    transform: translateX(0rem);
    opacity: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 20rem;
  height: 30rem;
  margin-bottom: 5rem;
  border-radius: 20px;
  ${flex};
  color: white;
  overflow: hidden;
  box-shadow: 0 0 4px ${purple};
  background-color: rgb(0, 0, 0, 0.5);
  animation: ${rightclose} 800ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  ${({ check }) => {
    if (check) {
      return css`
        @media screen and (max-width: 740px) {
          animation: ${show} 800ms;
          transform: translateX(0rem);
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        transform: translateX(10.5rem);
        animation: ${rightclose} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
    if (!check) {
      return css`
        @media screen and (max-width: 740px) {
          display: none;
          animation: ${show} 800ms;
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        animation: ${rightshow1} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
  }}
  ul {
    height: 26rem;
    overflow-y: scroll;
    ${hideScrollbar};
    li:nth-child(1) {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      i {
        position: absolute;
        font-size: 1.5rem;
        top: 2rem;
        left: 2.5rem;
      }
      i:hover {
        cursor: pointer;
      }
    }
  }
`;

export { Container, Contents, Content, BackImage, ListArea, Title };

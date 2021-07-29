import styled from "styled-components";
import { flex, marginTop, fontSize, hideScrollbar, cursorPointer } from "./styleConstants.js";


const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  ${flex};
  caret-color: transparent;
  background-color: rgb(0,0,0,0.7);
  z-index: 10;
  `;

const Content = styled.div`
  width: 30rem;
  height: 35rem;
  background-color: white;
  border-radius: 10px;
  ${flex};
  & ul {
    width: 27rem;
    height: 30rem;
    overflow-x: hidden;
    ${flex}
    align-items: flex-start;
    justify-content: flex-start;
    ${hideScrollbar};
  }
`;


const Header = styled.li`
  width: 100%;
  ${flex};
  flex-direction: row;
  justify-content: space-between;
  & span {
    ${flex};
    flex-direction: row;
    justify-content: flex-start;
    span {
      font-size: 1.2rem;
      font-weight: bold;
    }
    p {
      height: 1.5rem;
      padding: 0.2rem 0.5rem 0rem 0.5rem;
      color: #009432;
      background-color: #e1facf;
      border: 1px solid #b8e994;
      border-radius: 20px;
      margin-left: 0.5rem;
    }
  }
  & i {
    outline: none;
    border: none;
    background-color: transparent;
    ${cursorPointer};
  }
`;

const Images = styled.li`
  height: 20rem;
  margin: 1.5rem 0;
  ${flex};
  flex-direction: row;
  & img {
    width: 20rem;
    height: 20rem;
    background-color: black;
    margin: 0 0.2rem;
  }
`;

const Profile = styled.li`
  ${flex};
  flex-direction: row;
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: pink;
  }
  & p {
    margin: 0 1rem;
  }
  & span {
    font-weight: bold;
    color: #dfe4ea;
  }
`;

const Title = styled.li`
  ${marginTop};
`;

const Like = styled.li`
  width: 100%;
  ${marginTop};
  ${flex};
  flex-direction: row;
  justify-content: space-between;
  & span {
    /* margin-left: 0.5rem; */
  }
  & i {
    ${fontSize}
    ${cursorPointer};
  }
`;


const Comment = styled.li`
  width: 100%;
  ${marginTop};
  /* margin-top: 2rem; */
  padding: 1rem 0;
  border-top: 1px solid #e3e3e3;
  & textarea {
    width: 100%;
    height: 3rem;
    caret-color: black;
    border: 2px solid #e3e3e3;
    border-radius: 10px;
    outline: none;
    padding: 1rem;
    resize: none;
    ${hideScrollbar};
  }
  & div {
    ${flex};
    ${marginTop};
    justify-content: flex-start;
    flex-direction: row;
    & img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: pink;
    }
    & p {
      width: 90%;
      margin-left: 0.5rem;
    }
  }
`;


export {
  Container,
  Content,
  Header,
  Images, 
  Profile,
  Title, 
  Like,
  Comment,
};
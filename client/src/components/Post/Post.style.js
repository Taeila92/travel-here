import styled, { keyframes } from "styled-components";
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

const showPost = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Contents = styled.div`
  width: 30rem;
  background-color: white;
  border-radius: 10px;
  padding: 3rem 0;
  ${flex};
  animation: ${showPost} 500ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  /* filter: blur(5px); */
  ul {
    width: 27rem;
    max-height: 40rem;
    overflow-y: scroll;
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
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  padding-bottom: 1rem;
  z-index: 11;
  span {
    ${flex};
    flex-direction: row;
    justify-content: flex-start;
    span {
      font-size: 1.2rem;
      font-weight: bold;
      max-width: 12rem;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p:nth-child(2) {
      height: 1.5rem;
      padding: 0.2rem 0.5rem 0rem 0.5rem;
      color: #009432;
      background-color: #e1facf;
      border: 1px solid #b8e994;
      border-radius: 20px;
      margin: 0 0.5rem;
    }
    p:nth-child(3){
      font-size: 0.8rem;
    }
    i {
      margin-left: 1rem;
      ${cursorPointer};
    }
  }
  div{
    i {
      outline: none;
      border: none;
      background-color: transparent;
      margin-left: 1rem;
      ${cursorPointer};
    }
    div {
      position: absolute;
    }
  }
`;

const editDelToggle = styled.div`
  ${flex};
  ${cursorPointer};
  width: 4rem;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #E3E3E3;
  transform: translate(-0.8rem, 1rem);
  box-shadow: 0 0 4px #E3E3E3;
  div {
    position: absolute;
    top: 0;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-top: 1px solid #E3E3E3;
    border-left: 1px solid #E3E3E3;
    transform: translate(0rem, -0.55rem) rotate(0.125turn);
    box-shadow: 0 0 4px #E3E3E3;
  }
  p {
    padding: 0.5rem 0.5rem;
    font-size: 0.8rem;
  }
  p:nth-child(2){
    border-bottom: 1px solid #E3E3E3;
    background-color: white;
    z-index: 10;
    color: #409BF0;
  }
  p:nth-child(3){
    color: #ED4956;
  }
`;

const Profile = styled.li`
  ${flex};
  flex-direction: row;
  ${marginTop};
  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
    background-color: pink;
  }
  p {
    margin: 0 0.5rem;
  }
  span {
    font-weight: bold;
    font-size: 0.8rem;
    color: lightgray;
  }
  i {
    font-size: 3rem;
    color: darkgray;
    background: white;
    border-radius: 50%;
    transform: translateX(0.04rem);
  }
`;

const Title = styled.li`
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Content = styled.li`
  margin: 1rem 0 2rem 0;
  font-size: 0.9rem;
  line-height: 1.2;
`;

const Like = styled.li`
  width: 100%;
  ${marginTop};
  ${flex};
  flex-direction: row;
  justify-content: space-between;
  span {
    ${flex};
    flex-direction: row;
    font-size: 0.8rem;
    span {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.1rem;
    }
    p {
      font-size: 1rem;
      font-weight: bold;
    }
    i{
      font-size: 1rem;
      margin-right: 0.3rem;
      color: #ED4956;
    }
  }
  i {
    font-size: 1.2rem;
    ${cursorPointer};
  }
`;

const Img = styled.img`
  width: 30rem;
  height: 45rem;
  border-radius: 20px;
`;

const show = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.01);
  }
`;

const Alert = styled.div`
  position: absolute;
  width: 20rem;
  background: white;
  border: 1px solid #9980FA;
  box-shadow: 0 0 5px #9980FA;
  font-weight: bold;
  animation: ${show} 200ms;
  animation-iteration-count: 2;
  animation-direction: normal;
  div:nth-child(1){
    ${flex};
    justify-content: flex-start;
    height: 12rem;
    i {
      font-size: 4rem;
      margin: 3rem 0 2rem 0;
      color: #9980FA;
    }
  }
  div:nth-child(2){
    ${flex};
    padding: 3rem 0 2rem 0;
    button {
      ${cursorPointer};
      border: none;
      width: 15rem;
      height: 2.5rem;
      font-size: 0.9rem;
      font-weight: bold;
      border-radius: 10px;
    }
    button:hover{
      transform: scale(1.01);
    }
    button:nth-child(1){
      background: #b8a6ff;
      color: white;
      margin-bottom: 0.5rem;
    }
    button:nth-child(2){
      background: white;
      border: 1px solid #b8a6ff;
      color: #AFAFAF;
    }
  }
`;


const AlertText1 = styled.p`
  margin-bottom: 1rem; 
`;

const AlertText2 = styled.p`
  color: #AFAFAF;
`;

const Test = styled.div`
  position: absolute;
  width: 30rem;
  height: 50rem;
  background: rgb(255, 255, 255, 0.5);
  z-index: 20;
`;



export {
  Container,
  Contents,
  Header,
  editDelToggle,
  Profile,
  Title, 
  Content,
  Like,
  Img,
  Alert,
  AlertText1,
  AlertText2,
  Test,
};
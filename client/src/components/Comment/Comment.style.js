import styled from "styled-components";
import { flex, marginTop, hideScrollbar, cursorPointer } from "./styleConstants.js";

const Comment = styled.li`
  width: 100%;
  ${marginTop};
  padding-top: 1rem;
  border-top: 1px solid #e3e3e3;
  section {
    position: relative;
    height: 3rem;
    textarea {
      position: absolute;
      width: 100%;
      height: 3rem;
      caret-color: black;
      border: 2px solid #e3e3e3;
      border-radius: 10px;
      outline: none;
      padding: 1rem 5rem 1rem 1rem;
      resize: none;
      ${hideScrollbar};
    }
    button {
      position: absolute;
      right: 0;
      width: 5rem;
      height: 3rem;
      border: none;
      background-color: transparent;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const CommentList = styled.div`
  ${flex};
  margin-top: 0.5rem;
  justify-content: flex-start;
  flex-direction: row;
  white-space: pre;
  border-bottom: 1px solid #F2F2F2;
  &:last-child {
    border: none;
  }
  img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
    background-color: pink;
  }
  p:nth-child(1) {
    margin-left: 0.5rem;
    font-size: 0.7rem;
    color: darkgray;
    word-break: normal;
    text-align: center;
  }
  span, input {
    width: 85%;
    border: none;
    resize: none;
    outline: none;
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre-line;
    margin: 0 0.5rem;
  }
  input {
    width: 75%;
    border: 1px solid black;
    caret-color: black;
    z-index: 10;
  }
  input::placeholder{
    color: darkgray;
  }
  i {
    text-align: end;
    font-size: 1rem;
    margin-left: 0.5rem;
    ${cursorPointer};
  }
`;

const Content = styled.span`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const EditDel = styled.section`
  ${flex};
  width: 5%;
`;

const Check = styled.div`
  position: absolute;
  transform: translateX(1.2rem);
  background: white;
  font-size: 0.8rem;
  padding: 0.5rem 0;
  ${cursorPointer};
  color: #409BF0;
`;

const Toggle = styled.div`
  position: absolute;
  ${flex};
  flex-direction: row;
  border: 1px solid #e3e3e3;
  box-shadow: 0 0 4px #E3E3E3;
  border-radius: 10px;
  transform: translate(-4rem, 0rem);
  div {
    font-size: 0.8rem;
  }
  div:nth-child(1){
    padding: 0.1rem 0.5rem 0.1rem 1rem;
    border-right: 1px solid #e3e3e3;
    color: #409BF0;
    ${cursorPointer};
  }
  div:nth-child(2){
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    z-index: 10;
    border-radius: 10px;
    background: white;
    color: #ED4956;
    ${cursorPointer};
  }
  div:nth-child(3){
    position: absolute;
    right: 0;
    width: 0.5rem;
    height: 0.5rem;
    background: white;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 4px #E3E3E3;
    transform: translateX(0.25rem) rotate(0.125turn);
  }
`;


export {
  Comment,
  Content,
  CommentList,
  EditDel,
  Toggle,
  Check,
}
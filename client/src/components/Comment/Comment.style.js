import styled from "styled-components";
import { flex, marginTop, hideScrollbar } from "./styleConstants.js";

const Comment = styled.li`
  width: 100%;
  ${marginTop};
  padding: 1rem 0;
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
  div {
    ${flex};
    ${marginTop};
    justify-content: space-between;
    flex-direction: row;
    white-space: pre;
    img {
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      border-radius: 50%;
      background-color: pink;
    }
    p, input {
      width: 75%;
      border: none;
      resize: none;
      outline: none;
      font-size: 0.9rem;
      line-height: 1.5;
      white-space: pre-line;
      margin-left: 0.5rem;
    }
    input {
      border: 1px solid black;
      caret-color: black;
    }
    input::placeholder{
      color: darkgray;
    }
    i {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
`;

export {
  Comment,
}
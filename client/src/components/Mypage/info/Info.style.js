import styled, { css } from "styled-components";
import { flex, frame } from "../styleConstatns";

const Id = styled.li`
  ${frame};
  cursor: auto;
`;

const NickName = styled.li`
  ${frame};
  cursor: auto;
  div{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    textarea {
      caret-color: black;
      border: none;
      outline: none;
      resize: none;
      width: 80%;
      height: 1.5rem;
      font-size: 0.9rem;
      display: table-cell;
      vertical-align: middle;
      padding: 0.25rem;
      overflow: hidden;
    }
    textarea::placeholder{
      color: darkgray;
      font-weight: bold;
      font-size: 0.8rem;
    }
    button {
      height: 1.5rem;
      font-size: 0.8rem;
      background: #1A46A0;
      padding: 0.2rem 0.5rem;
      border: none;
      color: white;
      /* transform: translateY(0.06rem); */
    }
    button:hover {
      cursor: pointer;
    }
  }
`;

const Profile = styled.li`
  ${frame};
  cursor: auto;
`;

const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileIcon = styled.i`
  font-size: 5rem;
  margin: 0.5rem 1rem 0 0;
  object-fit: cover;
  border-radius: 50%;
  background: darkgray;
`;

const Title = styled.p`
  border-radius: 10px;
  color: #245ed4;
  font-weight: bold;
`;

const Icon = styled.i`
  color: darkgray; 
  :hover {
    cursor: pointer;
  }
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  i {
    margin-left: 0.5rem;
  }
  img {
    margin: 0.5rem;
    margin-left: 0;
    border-radius: 50%;
  }
  form{
    div:nth-child(1){
      margin: 0.5rem 0;
      label {
        font-size: 0.8rem;
        background: #1A46A0;
        padding: 0.2rem 0.5rem;
        border-radius: 10px;
      }
      label:hover {
        cursor: pointer;
      }
      input {
        display: none;
      }
    }
    div:nth-child(2){
      display: flex;
      flex-direction: row;
      align-items: center;
      button {
        height: 1.5rem;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 10px;
        border: none;
        background: #a14892;
        color: white;
        transform: translate(-0.5rem, -3.9rem);
      }
      button:hover {
        cursor: pointer;
      }
    }
  }
`;


export {
  Id,
  Paragraph,
  NickName,
  Profile,
  ProfileImg,
  ProfileIcon,
  Title,
  Icon,
};
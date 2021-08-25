import styled, { css } from "styled-components";
import { flex, frame } from "../styleConstatns";

const Id = styled.li`
  ${frame};
  cursor: auto;
`;

const NickName = styled.li`
  ${frame};
  cursor: auto;
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

const Title = styled.p`
  color: blue;
`;

const Icon = styled.i`
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
`;


export {
  Id,
  Paragraph,
  NickName,
  Profile,
  ProfileImg,
  Title,
  Icon,
};
import styled, { css } from "styled-components";

const Id = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
`;

const NickName = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
`;

const Profile = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
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


export {
  Id,
  NickName,
  Profile,
  ProfileImg,
  Title,
  Icon,
};
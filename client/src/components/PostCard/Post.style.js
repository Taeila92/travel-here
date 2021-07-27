import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-width : 200px;
  max-width : 300px;
  min-height : 200px;
  border-radius: 1rem;
  box-shadow : 0 0 8px #f40057;
  color : white;
  margin : 0.5rem;
  padding : 0.8rem;
`;

const Profile = styled.div`
`;

const Content = styled.div`
  width : 100%;
  & img {
    width : 100%;
    height : 100%;
  }
`;


export{
  Container,
  Profile,
  Content
}
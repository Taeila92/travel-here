import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-width : 300px;
  max-width : 300px;
  border-radius: 1.5rem;
  box-shadow : 0 0 4px #f40057;
  color : white;
  margin : 0.5rem; 
  padding : 1.6rem 0.6rem;
  z-index : 1;
`;

const Profile = styled.div`
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom : 1rem;
  position : relative;
  img {
    width : 2rem;
    height : 2rem;
    border-radius: 50%;
  }
  div {
    margin-left: 1rem;
  }
  p {
    position : absolute;
    right : 0;
    margin-right : 1rem;
  }
`;

const Content = styled.div`
  width : 100%;
  position : relative;
  min-height: 100px;
  h2 {
    font-size : 1.3rem;
    margin-bottom : 0.5rem;
  }
  img {
    width : 100%;
    height : 15rem;
    object-fit: cover;
    border-radius: 0.3rem;
    margin-bottom : 0.5rem;
  }
  div {
    font-size : 0.8rem;
    position : absolute;
    bottom : -10px;
  }
`;

const SkeletonContainer = styled.div`
  margin : 0.5rem;
  padding : 1.6rem 0.6rem;
  border-radius: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

export{
  Container,
  Profile,
  Content,
  SkeletonContainer
}
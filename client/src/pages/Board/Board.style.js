import styled from "styled-components";

const Container = styled.div`
  margin : 5vh 5vw;
  width : 80vw;
  ${(props)=>{
    return `height : ${props.postlistLength * 6}vh`
  }};
  display : flex;
  flex-direction: column;
  flex-wrap : wrap;
`;

export {
  Container
}
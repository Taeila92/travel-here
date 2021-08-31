import styled, { css } from "styled-components";

const width = "80vw";
const height = "70vh";

const Container = styled.div`
  width: ${width};
  /* height: ${height}; */
  background-color: white;
  border-radius: 0.5rem;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: calc(-${height} / 2);
  margin-left: calc(-${width} / 2);
  z-index: 100;
  overflow: hidden;

  p {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea,
  select {
    margin: 1rem 0.5rem 0;
    border: 2px solid #e3e3e3;
    border-radius: 5px;
  }
  input:last-child{
    margin-bottom: 1rem;
  }
  textarea {
    ${(props) =>
      !props.isHeight &&
      css`
        height: 40vh;
      `}
  }
`;
const ImgWrapper = styled.div`
  margin: 0.5rem 0.5rem 0;
  height: 80px;
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  img {
    margin: 0.2rem;
  }
  ${(props) => {
    if(props.attachment === undefined){
      return;
    }
    if(props.attachment.length === 0){
      return css`
        display: none;
      `;
    } else {
      return css`
        display: block;
      `;
    }
  }} 
`;
const Wrapper = styled.span`
  width: 100%;
  display: flex;
  align-items: center;

  margin: 1rem 0 0 0.5rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  span {
    margin-left: 0.2rem;
  }
`;
const NamelessIcon = styled.i`
  font-size: 2rem;
  color: darkgray;
  left: 0;
  margin-left: 0.2rem;
`;
const Name = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

const CloseModal = styled.i`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
const Overlay = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export {
  Container,
  Overlay,
  Wrapper,
  Name,
  ImgWrapper,
  NamelessIcon,
  CloseModal,
};

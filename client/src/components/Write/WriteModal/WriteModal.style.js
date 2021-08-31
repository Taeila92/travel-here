import styled, { css } from "styled-components";

const width = "80vw";
const height = "65vh";
const primaryColor = "#1a46a0";

const Container = styled.div`
  width: ${width};
  height: ${height};
  background-color: white;
  border-radius: 0.5rem;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: calc(-${height} / 2);
  margin-left: calc(-${width} / 2);
  z-index: 100;
  overflow: auto;

  p {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  /* input, */
  textarea,
  select {
    margin: 1rem 0.5rem 0;
    border: 2px solid #e3e3e3;
    border-radius: 5px;
  }
  textarea {
    ${(props) =>
      !props.isHeight &&
      css`
        height: 40vh;
      `}
  }
`;
const TitleInput = styled.input`
  margin: 1rem 0.5rem 0;
  border: 2px solid #e3e3e3;
  border-radius: 5px;
`;
const ImgUpload = styled.div`
  height: 1.6rem;
  position: relative;
  label {
    position: absolute;
    top: 50%;
    margin-top: calc(-1rem / 2);
    left: 0.5rem;
    color: white;
    font-size: 0.8rem;
    background: ${primaryColor};
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    :hover {
      cursor: pointer;
    }
  }
  p {
    margin-left: 5.2rem;
    font-size: 0.8rem;
    color: red;
  }
  input {
    display: none;
  }
`;
const ImgWrapper = styled.div`
  margin: 0.5rem 0.5rem 0;
  height: 80px;
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  display: flex;
  div {
    position: relative;
    i {
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
    }
    img {
      margin: 0.2rem;
      width: 70px;
      height: 70px;
    }
  }
`;
const SubmitBtn = styled.input`
  background-color: ${primaryColor};
  font-weight: 700;
  color: white;
  height: 2rem;
  border: none;
  letter-spacing: 1rem;
  font-size: 1.1rem;
  border: none;
  text-align: center;

  margin: 1rem 0.5rem 0;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
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
  ImgUpload,
  SubmitBtn,
  TitleInput,
};

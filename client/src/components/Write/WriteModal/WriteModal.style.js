import styled, { css } from "styled-components";

const width = "80vw";
const height = "65vh";
const primaryColor = "#1a46a0";

const Container = styled.div`
  width: ${width};
  height: ${height};
  background-color: white;
  border-radius: 0.3rem;
  position: fixed;
  transition: 0.5s;
  top: 50%;
  left: 50%;
  margin-top: calc(-${height} / 2);
  margin-left: calc(-${width} / 2);
  overflow: auto;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(-5rem)"};
  z-index: ${(props) => (props.visible ? 100 : -1)};

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
    option {
      color: #333333;
    }
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
    transition: 0.3s;
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

const BtnWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  input {
    background-color: ${primaryColor};
    width: 8rem;
    font-weight: 700;
    color: white;
    height: 2rem;
    border: none;
    font-size: 1.1rem;
    border: none;
    text-align: center;
    transition: 0.3s;
    margin: auto;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      border: 1px solid ${primaryColor};
      color: ${primaryColor};
      background-color: transparent;
    }

    :nth-child(1) {
      color: #555555;
      margin-right: 1rem;
      background-color: #e3e3e3;
      :hover {
        border: 1px solid #333333;
        background-color: transparent;
      }
    }
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: ${(props) => (props.visible ? 90 : -2)};
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
  BtnWrapper,
  TitleInput,
};

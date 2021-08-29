import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  transition: 0.3s;
  background-color: #1A46A0;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: calc(-3rem / 2);
    margin-top: calc(-0.5rem / 2);
    width: 3rem;
    height: 0.5rem;
    background-color: black;
    border-radius: 1rem;
    transition: 0.3s;
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: calc(-3rem / 2);
    margin-left: calc(-0.5rem / 2);
    width: 0.5rem;
    height: 3rem;
    background-color: black;
    border-radius: 1rem;
    transition: 0.3s;
  }
  :hover {
    background-color: transparent;
    border: 0.2rem solid #1A46A0;
    ::after {
      background-color: #1A46A0;
    }
    ::before {
      background-color: #1A46A0;
    }
  }
`;

export { Button };

import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    li {
      width: 100%;
      h1 {
        font-size: 36px;
        transform: translateY(-100%);
      }
      .inputEmail {
        display: block;
        width: 100%;
        padding: 8px;
        height: 2rem;
        border-radius: 12px;
        outline: none;
      }
      .errorMsg {
        color: red;
        font-size: 16px;
      }
      .inputPw {
        display: block;
        width: 100%;
        padding: 8px;
        height: 2rem;
        margin-top: 1.5em;
        border-radius: 12px;
        outline: none;
      }
      .loginBtn {
        border: none;
        width: 100%;
        height: 3rem;
        border-radius: 12px;
        background-color: #d8bfd8;
        cursor: pointer;
        font-size: 18px;
        margin-top: 1rem;
      }
      .logoutBtn {
        padding: 1.45em;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
`;

export { Header };

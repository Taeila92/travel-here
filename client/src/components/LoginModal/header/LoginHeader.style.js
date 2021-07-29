import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 36px;
  transform: translateY(-100%);
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const Form = styled.form`
  padding: 20px 0;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  height: 2rem;
  margin-bottom: 1.5em;
  border-radius: 12px;
  outline: none;
`;

const Li = styled.li`
  width: 100%;
`;

const Button = styled.button`
  border: none;
  width: 100%;
  height: 3rem;
  border-radius: 12px;
  background-color: #d8bfd8;
  cursor: pointer;
  font-size: 18px;
`;

const Span = styled.button`
  padding: 1.45em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
`;

export { Header, Ul, Form, Input, Li, H1, Button, Span };

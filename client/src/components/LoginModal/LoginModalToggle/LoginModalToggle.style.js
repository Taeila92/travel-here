import styled from 'styled-components';

const ContainerInfo = styled.div`
  text-align: left;
  font-size: 0;
`;

const InfoItem = styled.div`
  text-align: center;
  font-size: 16px;
  width: 300px;
  height: 320px;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  opacity: 1;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

const Table = styled.div`
    display: table;
    width: 100%;
    height: 100%;
}
`;

const TableCell = styled.div`
    display: table-cell;
    vertical-align: middle;
    padding-left: 35px;
    padding-right: 0;
}
`;

const P = styled.p`
  font-size: 20px;
  margin: 20px;
`;

const Btn = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
`;

const ContainerForm = styled.div`
  overflow: hidden;
  position: absolute;
  left: 30px;
  top: -30px;
  width: 305px;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  ::before {
    content: '✔';
    position: absolute;
    left: 160px;
    top: -50px;
    color: #5356ad;
    font-size: 130px;
    opacity: 0;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .formItem.logIn {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .table {
    display: table;
    width: 100%;
    height: 100%;
  }
  .tableCell {
    display: table-cell;
    vertical-align: middle;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  input {
    margin: 0 auto 15px;
    display: block;
    width: 220px;
    transition: all 0.3s;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    font: 400 13.3333px Arial;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    padding: 10px 15px;
  }
  .loginBtn {
    position: relative;
    box-shadow: 0 0 10px 1px #ff73b3;
    margin-top: 30px;
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    width: 60px;
    color: #fff;
    background-color: #ff73b3;
    opacity: 1;
    transition: all 0.5s;
  }
  .formItem.signUp {
    position: absolute;
    left: -100%;
    opacity: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }
`;

export { InfoItem, ContainerInfo, Table, TableCell, P, Btn, ContainerForm };

import React from 'react';
import * as S from './LoginModalToggle.style';

const LoginModalToggle = ({ toggleClass }) => {
  return (
    <>
      <S.ContainerInfo>
        <S.InfoItem>
          <S.Table>
            <S.TableCell>
              <S.P> Have an account? </S.P>
              <S.Btn> Log in </S.Btn>
            </S.TableCell>
          </S.Table>
        </S.InfoItem>
        <S.InfoItem>
          <S.Table>
            <S.TableCell>
              <S.P> Don't have an account? </S.P>
              <S.Btn onClick={toggleClass}> Sign up </S.Btn>
            </S.TableCell>
          </S.Table>
        </S.InfoItem>
      </S.ContainerInfo>

      <S.ContainerForm>
        <div className="formItem logIn">
          <div className="table">
            <div className="tableCell">
              <input name="Username" placeholder="Username" type="text" />
              <input name="Password" placeholder="Password" type="Password" />
              <button className="loginBtn"> Log in</button>
            </div>
          </div>
        </div>

        <div className="formItem signUp">
          <div className="table">
            <div className="tableCell">
              <input name="email" placeholder="Email" type="text" />
              <input name="fullName" placeholder="fullName" type="text" />
              <input name="Username" placeholder="Username" type="text" />
              <input name="Password" placeholder="Password" type="Password" />
              <button className="signBtn">Sign up</button>
            </div>
          </div>
        </div>
      </S.ContainerForm>
    </>
  );
};

export default LoginModalToggle;

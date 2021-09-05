import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Password.style';
import firebase from 'firebase';
import { deburr } from 'lodash';

const Password = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();
  const goToMypage = () => {
    let path = '/';
    history.push(path);
  };

  const passwordChange = async () => {
    function getASecureRandomPassword() {
      return password;
    }

    // [START auth_update_password]
    const user = firebase.auth().currentUser;
    const newPassword = getASecureRandomPassword();

    user
      .updatePassword(newPassword)
      .then(() => {
        setPassword('');
        alert('패스워드가 변경 되었습니다.');
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setPasswordError(err.message);
            break;
          default:
            return;
        }
      });
  };

  // //사용자 재인증

  function reauthenticateWithCredential() {
    function promptForCredentials() {
      return {};
    }

    // [START auth_reauth_with_credential]
    const user = firebase.auth().currentUser;

    // TODO(you): prompt the user to re-provide their sign-in credentials
    const credential = firebase.auth.EmailAuthProvider.credential(user.email);
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        // User re-authenticated.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
    // [END auth_reauth_with_credential]
  }

  return (
    <>
      {/* <S.Container> */}
      <S.Contents>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p className="errorMsg">{passwordError}</p>
        <button className="chageBtn" onClick={passwordChange}>
          변경
        </button>
        {/* <S.BackBtn onClick={goToMypage}>
            <i className="fas fa-times"></i>
          </S.BackBtn> */}
      </S.Contents>
      {/* </S.Container> */}
    </>
  );
};

export default Password;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Password.style';
import firebase from 'firebase';

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
        console.log('Update successful');
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

  // function promptForCredentials() {
  //   return {};
  // }
  // // TODO(you): prompt the user to re-provide their sign-in credentials
  // const credential = promptForCredentials();

  // user
  //   .reauthenticateWithCredential(credential)
  //   .then(() => {
  //     console.log('User re-authenticated');
  //   })
  //   .catch((error) => {
  //     console.log('An error ocurred');
  //   });

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
            <i class="fas fa-times"></i>
          </S.BackBtn> */}
        </S.Contents>
      {/* </S.Container> */}
    </>
  );
};

export default Password;

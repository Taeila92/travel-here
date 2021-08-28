import React, { useState, useRef } from 'react';
import * as S from './Password.style';
import firebase from 'firebase';

const Password = () => {
  function getASecureRandomPassword() {
    return 'correcthorsebatterystaple';
  }
  // [START auth_update_password]
  const user = firebase.auth().currentUser;
  const newPassword = getASecureRandomPassword();

  user
    .updatePassword(newPassword)
    .then(() => {
      console.log('Update successful');
    })
    .catch((error) => {
      console.log('An error ocurred');
    });

  //사용자 재인증

  function promptForCredentials() {
    return {};
  }
  // TODO(you): prompt the user to re-provide their sign-in credentials
  const credential = promptForCredentials();

  user
    .reauthenticateWithCredential(credential)
    .then(() => {
      console.log('User re-authenticated');
    })
    .catch((error) => {
      console.log('An error ocurred');
    });

  return (
    <>
      <h1>비밀번호 변경</h1>
      <inpu></inpu>
      <button>변경</button>
    </>
  );
};

export default Password;

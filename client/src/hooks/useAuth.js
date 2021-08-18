import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { dbService } from "firebase.js";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState();

  const login = (providerName) => {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  };

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // 로그인한 유저가 있다면
      if (user) {
        const userDB = dbService.collection("users").doc(user.uid);
        // 유저 정보가 db에 저장되어 있다면
        if (userDB.exists) {
          userDB.get().then((value) => {
            setUser(value.data());
          });
          // 아니면 새로 저장해야
        } else {
          const value = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            user_image: "",
            user_like_comments: [],
            user_like_posts: [],
            user_bookmark_posts: [],
            user_write_comments: [],
            user_write_posts: [],
          };
          userDB.set(value);
          setUser(value);
        }
        setIsLoggedIn(true);
        // 로그인한 유저가 없다면
      } else {
        setIsLoggedIn(false);
        setUser({});
      }
    });
  }, []);

  return [isLoggedIn, user];
};

export default useAuth;

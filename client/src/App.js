// react
import React, { useEffect, useState } from 'react';

// style
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/Header/Header';
import * as S from 'styles/Background';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryList from 'pages/CategoryList';
import Board from 'pages/Board/Board';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import WriteBtn from 'components/Write/WriteBtn/WriteBtn';

// firebase
import firebase from 'firebase';
import { dbService } from 'firebase.js';
import WriteModal from 'components/Write/WriteModal/WriteModal';

// hook
import useAuth from 'hooks/useAuth';

function App() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const [isLoggedIn, userInfo] = useAuth();

  const isVisible = () => {
    setVisible(!visible);
    console.log(visible);
  };

  // firestore에서 유저정보 가져오기
  const getUser = async () => {
    const users = await dbService.collection('users').get();
    return users;
  };

  const setUserDB = async (user) => {
    const users = await getUser();
    let id = [];
    users.forEach((user) => {
      id.push(user.id);
    });

    // 로그인한 유저정보가 기존의 firestore에 없을 경우에만 firestore에 저장
    const includeId = id.includes(user.email);
    if (!includeId) {
      dbService.collection('users').doc(user.email).set({
        user_id: user.email,
        user_image: '아이유.jpg',
        user_name: user.displayName,
        user_like_comments: [],
        user_like_posts: [],
        user_bookmark_posts: [],
        user_write_comments: [],
        user_write_posts: [],
      });
    }
  };

  // firebase가 onAuthStateChanged을 통해 프로그램을 초기화 하면(로그인이나 계정생성 등의 변화) isLoggedIn을 바꾼다
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        // 유저정보 firestore에 저장하기
        setUserDB(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); //setInit이 false라면 router를 숨겨서 true로 함
    });
  }, []);

  console.log(userObj);

  return (
    <Background>
      <GlobalStyle />
      <BrowserRouter>
        {/* 사용자가 로그인 되었을 때*/}
        {isLoggedIn ? (
          <Header
            setActive={setActive}
            active={active}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <Header
            setActive={setActive}
            active={active}
            isLoggedIn={isLoggedIn}
          />
        )}
        <S.Content>
          {init ? (
            // 로그인 전
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:religion" component={Board} />
              <Route component={NotFound} />
            </Switch>
          ) : (
            // 로그인 후
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:religion" component={Board} />
              <Route component={NotFound} />
            </Switch>
          )}
        </S.Content>
      </BrowserRouter>
      {isLoggedIn && (
        <>
          <WriteBtn isVisible={isVisible} />
          <WriteModal
            visible={visible}
            isVisible={isVisible}
            userObj={userInfo}
          />
        </>
      )}
    </Background>
  );
}

export default App;

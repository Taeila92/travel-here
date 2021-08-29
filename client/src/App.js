// react
import React, { useEffect, useState } from 'react';

// style
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/Header/Header';
import { Background, Content } from 'styles/Background';

// router
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CategoryList from 'pages/CategoryList';
import Board from 'pages/Board/Board';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import WriteBtn from 'components/Write/WriteBtn/WriteBtn';
import MyPage from 'pages/MyPage';
import PassWord from 'pages/PassWord';

// firebase
import { dbService } from 'firebase.js';
import WriteModal from 'components/Write/WriteModal/WriteModal';
import LoginFind from 'pages/LoginFind';

// hook
import useAuth from 'hooks/useAuth';

function App() {

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [isLoggedIn, userInfo] = useAuth();

  const isVisible = () => {
    setVisible(!visible);
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
    const includeId = id.includes(user.uid);
    if (!includeId) {
      dbService.collection('users').doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        user_image: user.photoURL,
        user_like_comments: [],
        user_like_posts: [],
        user_bookmark_posts: [],
        user_write_comments: [],
        user_write_posts: [],
      });
    }
  };

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
        <Content>
          {!isLoggedIn ? (
            // 로그인 전
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/loginhelp" component={LoginFind} />
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:region" component={Board} />
              <Route component={NotFound} />
            </Switch>
          ) : (
            // 로그인 후
            <Switch>
              <Route exact path="/" component={Home} />
              {isLoggedIn && <Route path="/password" component={PassWord} />}
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:region" component={Board} />
              <Route exact path="/mypage" component={MyPage} />
              <Route component={NotFound} />
            </Switch>
          )}
        </Content>
        <Link to="/categorylist/:region" />
        {isLoggedIn && (
          <>
            <WriteBtn isVisible={isVisible} />
            <WriteModal visible={visible} isVisible={isVisible} />
          </>
        )}
      </BrowserRouter>
    </Background>
  );
}

export default App;

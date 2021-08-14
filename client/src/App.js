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
import WriteModal from 'components/Write/WriteModal/WriteModal';
import { authService } from 'firebase.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const isVisible = () => {
    setVisible(!visible);
    console.log(visible);
  };

  // firebase가 onAuthStateChanged을 통해 프로그램을 초기화 하면(로그인이나 계정생성 등의 변화) isLoggedIn을 바꾼다
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
        });
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <S.Background className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header setActive={setActive} active={active} isLoggedIn={isLoggedIn} />
        <S.Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/categorylist" component={CategoryList} />
            <Route path="/categorylist/:religion" component={Board} />
            <Route component={NotFound} />
          </Switch>
        </S.Content>
      </BrowserRouter>
      {isLoggedIn && (
        <>
          <WriteBtn isVisible={isVisible} />
          <WriteModal
            visible={visible}
            isVisible={isVisible}
            userObj={userObj}
          />
        </>
      )}
    </S.Background>
  );
}

export default App;

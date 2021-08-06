// react
import React, { useEffect, useState } from 'react';

// style
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/Header/Header';
import * as S from 'styles/Background';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryList from 'pages/CategoryList';
import Board from 'pages/Board';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
// import NotFound from 'pages/NotFound';
import NavLinks from 'components/NavLinks/NavLinks';

// firebase
import firebase from 'firebase';

function App() {
  const auth = firebase.auth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // firebase가 onAuthStateChanged을 통해 프로그램을 초기화 하면(로그인이나 계정생성 등의 변화) isLoggedIn을 바꾼다
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); //setInit이 false라면 router를 숨겨서 true로 함
    });
  }, []);

  return (
    <S.Background className="App">
      <GlobalStyle />
      <BrowserRouter>
        {/* 사용자가 로그인 되었을 때*/}
        {isLoggedIn && <NavLinks isLoggedIn={isLoggedIn} />}
        {/* 사용자가 로그아웃된 페이지 */}
        {isLoggedIn || <Header />}
        <Switch>
          {init ? (
            // 로그인 전
            <>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:religion" component={Board} />
              {/* <Route from="*" path="/" component={NotFound} /> */}
            </>
          ) : (
            // 로그인 후
            <>
              <Route exact path="/" component={Home} />
              <Route path="/logout" component={Logout} />
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:religion" component={Board} />
              {/* <Route from="*" path="/" component={NotFound} /> */}
            </>
          )}
        </Switch>
      </BrowserRouter>
    </S.Background>
  );
}

export default App;

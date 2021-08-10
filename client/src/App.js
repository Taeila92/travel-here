// react
import React, { useEffect, useState } from "react";

// style
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/Header/Header";
import * as S from "styles/Background";

// router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryList from "pages/CategoryList";
import Board from "pages/Board/Board";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";

import WriteBtn from "components/Write/WriteBtn/WriteBtn";

// firebase
import firebase from "firebase";
import WriteModal from "components/Write/WriteModal/WriteModal";

function App() {
  const auth = firebase.auth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const isVisible = () => {
    setVisible(!visible);
    console.log(visible);
  };

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
      </BrowserRouter>
      {isLoggedIn && (
        <>
          <WriteBtn isVisible={isVisible} />
          <WriteModal visible={visible} isVisible={isVisible} />
        </>
      )}
    </S.Background>
  );
}

export default App;

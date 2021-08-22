// react
import React, { useState } from "react";

// style
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/Header/Header";
import { Background, Content } from "styles/Background";

// router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryList from "pages/CategoryList";
import Board from "pages/Board/Board";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import WriteBtn from "components/Write/WriteBtn/WriteBtn";
import WriteModal from "components/Write/WriteModal/WriteModal";

// hook
import useAuth from "hooks/useAuth";

function App() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const [isLoggedIn, userInfo] = useAuth();

  const isVisible = () => {
    setVisible(!visible);
    console.log(visible);
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
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:region" component={Board} />
              <Route component={NotFound} />
            </Switch>
          ) : (
            // 로그인 후
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categorylist" component={CategoryList} />
              <Route path="/categorylist/:region" component={Board} />
              <Route component={NotFound} />
            </Switch>
          )}
        </Content>
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

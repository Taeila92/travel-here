// react
import React from "react";

// style
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import * as S from "./styles/Background";

// router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryList from "./pages/CategoryList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <S.Background className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/categorylist" component={CategoryList} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </S.Background>
  );
}

export default App;

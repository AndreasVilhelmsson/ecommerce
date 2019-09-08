import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.components";
//import HatPage from "./pages/hatpage/hatpage.components";
import Header from "./components/header/header.components";
import ShopPage from "./pages/shopPage/shopPage.components";
import { Route, Switch } from "react-router-dom";
import SignInSignUpPage from "./pages/Sign-in-sign-up-page/Sign-in-sign-up-page.components";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
        <Route path='/signin/' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}
export default App;

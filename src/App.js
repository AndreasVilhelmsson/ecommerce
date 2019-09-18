import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.components";
//import HatPage from "./pages/hatpage/hatpage.components";
import { connect } from "react-redux";
import Header from "./components/header/header.components";
import ShopPage from "./pages/shopPage/shopPage.components";
import { Route, Switch } from "react-router-dom";
import SignInSignUpPage from "./pages/Sign-in-sign-up-page/Sign-in-sign-up-page.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  null,
  mapDispatchToProps
)(App);

import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.components";
//import HatPage from "./pages/hatpage/hatpage.components";
import Header from "./components/header/header.components";
import ShopPage from "./pages/shopPage/shopPage.components";
import { Route, Switch } from "react-router-dom";
import SignInSignUpPage from "./pages/Sign-in-sign-up-page/Sign-in-sign-up-page.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop/' component={ShopPage} />
          <Route path='/signin/' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;

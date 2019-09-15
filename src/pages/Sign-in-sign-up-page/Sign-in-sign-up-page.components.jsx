import React, { Component } from "react";
import "./Sign-in-sign-up-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.component";
class SignInSignUpPage extends Component {
  render() {
    return (
      <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUpPage;

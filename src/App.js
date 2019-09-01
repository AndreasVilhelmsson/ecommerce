import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.components";
import HatPage from "./pages/hatpage/hatpage.components";
import Users from "./pages/users/users.components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/hats/' component={HatPage} />
        <Route path='/users/' component={Users} />
      </Switch>
    </div>
  );
}

export default App;

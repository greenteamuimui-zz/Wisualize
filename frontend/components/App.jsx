import React from 'react';
import HeaderContainer from './header/header_container';
import AuthFormContainer from './authsession/auth_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainPageContainer from './main/main_container';



const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>Wisualize</h1>
      <HeaderContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={AuthFormContainer} />
      <AuthRoute exact path="/signup" component={AuthFormContainer} />
      <ProtectedRoute exact path="/main" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;

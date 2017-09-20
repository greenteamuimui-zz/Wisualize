import React from 'react';
import HeaderContainer from './header/header_container';
import AuthFormContainer from './authsession/auth_form_container';
import { Route, Switch, Link } from 'react-router-dom';
// import {AuthRoute, ProtectedRoute} from '../util/route_util';



const App = () => (
  <div>
    <header className="app-header">
      <h1>Wisualize</h1>
      <HeaderContainer />
    </header>
    <Switch>
      <Route exact path="/login" component={AuthFormContainer} />
      <Route exact path="/signup" component={AuthFormContainer} />
    </Switch>
  </div>
);

export default App;

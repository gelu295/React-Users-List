import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login'

import Users from './pages/Users'
import Unauthorized from './pages/Unauthorized'
import ProtectedRoute from './components/ProtectedRoute'

import {Context} from './Context'

function App() {
  const {isAuth} = useContext(Context);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>

        <ProtectedRoute exact path="/users" component={Users} isAuth={isAuth}/>
        <Route path='/unauthorized' component={Unauthorized}/>
      </Switch>
    </Router>
  );
}

export default App;

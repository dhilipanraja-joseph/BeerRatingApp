import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import LoginSuccess from './components/LoginSuccess'
import store from './store'
////////////////////////////////////////////////
//import UserStore from './stores/UserStore'
////////////////////////////////////////////////


render(
  <Provider store={store}>

    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Splash} />

        <Route path='/register' component={RegisterPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/loginSuccess' component={LoginSuccess}/>

      </Route>
    </Router>
  </Provider>,

  document.getElementById('root')
);

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Layout
import MainLayout from '../components/layout/mainLayout';

//Pages
import Create from '../components/create/create';
import Edit from '../components/edit/edit';
import App from '../App';


export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/create' component={Create} />
      <Route path='/edit/:id' component={Edit} />
    </Route>
  </Router>
)
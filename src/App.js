import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Create from './components/create/create';
import ProjectListContainer from './components/containers/progectListContainer/projectListContainer';
import Edit from './components/edit/edit';
import Login from './components/login/login';
import Register from './components/registerUser/registerUser';
import MyProject from './components/containers/myProjectListContainer/myProjectListContainer';

class App extends Component {


  showLinks = () => {
   
    if (this.props.user) {
      return (
        <React.Fragment>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/myproject">My Project</Link>
          </li>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/allprojects">Projects</Link>
              </li>
              { this.showLinks() }
            </ul>

            <hr />

            <Route exact path='/allprojects' component={ ProjectListContainer }></Route>
            <Route path='/create' component={ Create } />
            <Route path='/myproject' component={ MyProject } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/login' component={ Login }></Route>
            <Route path='/registration' component={ Register } />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = function (store) {
  console.log("APP store - ", store);
  return {
    user: store.authenticationState.user
  };
};

export default connect(mapStateToProps)(App);





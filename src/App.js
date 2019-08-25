import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Create from './components/create/create';
import ProjectListContainer from './components/containers/progectListContainer';
import Edit from './components/editProject';
import Login from './components/login/login';
import Register from './components/registerUser/registerUser';
import userProject from './components/containers/userProjectListContainer';

class App extends Component {
   
  showLinks () {
 let links = {};

    if (!this.props.user.userAuth) {
    links = {
      "/login":"Login",
     "/registration":"Register",
      "/projects":"Projects"
    }
  } else if(this.props.user.userAuth){
    links = {
      "/login":"Login",
     "/registration":"Register",
      "/projects":"Projects",
      "/create":"Create",
     "/my_project": "My Project"
    }
  }

    let listItem = Object.keys(links).map((link,index)=>
    <li key={index}>
      <Link to={link}>{links[link]}</Link>
      </li>
    );
    return listItem;
}

  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <ul>
             {this.showLinks()}
            </ul>

            <hr />

            <Route exact path='/projects' component={ ProjectListContainer }/>
            <Route path='/create' component={ Create } />
            <Route path='/my_project' component={ userProject } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/login' component={ Login }/> 
            <Route path='/registration' component={ Register } />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps=(store)=>{
  console.log("APP store - ", store);
  return {
    user: store.authenticationState
  };
};

export default connect(mapStateToProps)(App);
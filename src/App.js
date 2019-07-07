import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Create from './components/create/create';
import ProjectListContainer from './components/containers/projectListContainer';
import Edit from './components/edit/edit';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <ul>
              <li>
                <Link to="/allprojects">Projects</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>

            <hr />

            {/*<Route exact path='/index' component={Index} />*/}
            <Route exact path='/allprojects' component={ProjectListContainer}></Route>
            <Route path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;




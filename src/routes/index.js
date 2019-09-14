import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Create from '../components/create/create';
import ProjectListContainer from '../components/containers/progectListContainer';
import Edit from '../components/editProject';
import Login from '../components/login/login';
import Register from '../components/registerUser/registerUser';
import userProject from '../components/containers/userProjectListContainer';


export const routes = (
  <div>

<Route exact path='/projects' component={ ProjectListContainer }/>
<Route path='/create' component={ Create } />
<Route path='/my_project' component={ userProject } />
<Route path='/edit/:id' component={ Edit } />
<Route path='/login' component={ Login }/> 
<Route path='/registration' component={ Register } />

</div>
)


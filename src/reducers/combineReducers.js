import { combineReducers } from 'redux';

import projectReducer from './projectReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    projectState: projectReducer,
    userState: userReducer,
    authenticationState: authReducer
});

export default reducers;
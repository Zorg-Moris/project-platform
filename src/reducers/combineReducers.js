import { combineReducers } from 'redux';

import projectReducer from './projectReducer';

let reducers = combineReducers({
    projectState: projectReducer
});

export default reducers;
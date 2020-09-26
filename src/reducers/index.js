import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    users: usersReducer,
    alert: alertReducer
})
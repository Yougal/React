import {combineReducers} from 'redux';
import fetchPostsReducer from './postReducer'
import fetchUserHeaderReducer from './userHeaderReducer'

export default combineReducers({posts:fetchPostsReducer,user:fetchUserHeaderReducer});
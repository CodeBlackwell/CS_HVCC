import { combineReducers } from 'redux'
import homepage from './homepage_reducer'
import instructors from './instructorList_reducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    homepage,
    instructors,
    routing: routerReducer
});

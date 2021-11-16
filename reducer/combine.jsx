//import Changenumbersecond from '../reducer/multi'
//import Changenumber from '../reducer/updown'
import TodoReducer from './todo'
import Changenumber from './add'


import {combineReducers} from "redux"
const rootReducer = combineReducers({TodoReducer,Changenumber})
export default rootReducer;

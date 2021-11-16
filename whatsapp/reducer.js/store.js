import {createStore} from 'redux'
import reducerdata from './combine'

const stores= createStore(reducerdata,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default stores;
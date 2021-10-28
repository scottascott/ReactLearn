import {createStore,combineReducers} from 'redux'
import countReducer from './reducers/count.js'
import person_reducer from './reducers/person.js'
import {composeWithDevTools} from 'redux-devtools-extension'


const allReducers=combineReducers({
    count:countReducer,
    personInfo:person_reducer,
})

export default createStore(allReducers,composeWithDevTools())
// export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
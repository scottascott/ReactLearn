import {createStore,combineReducers} from 'redux'
import countReducer from './reducers/count.js'
import person_reducer from './reducers/person.js'

const allReducers=combineReducers({
    count:countReducer,
    personInfo:person_reducer,
})

export default createStore(allReducers)
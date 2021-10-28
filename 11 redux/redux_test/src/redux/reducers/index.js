import {combineReducers} from 'redux'
import count from './count.js'
import personInfo from './person.js'

const allReducers=combineReducers({
    count,
    personInfo,
})

export default allReducers
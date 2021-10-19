import {ADD_PERSON} from '../constant.js'

export const createAddPersonAction= personObj => ({type:ADD_PERSON,data:personObj})
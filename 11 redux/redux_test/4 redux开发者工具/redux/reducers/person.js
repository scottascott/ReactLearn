import {ADD_PERSON} from '../constant'

const iniState=[{id:'11',name:'jerry',age:'12'}]

export default function person_reducer(preState=iniState,action) {
    const{type,data}=action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}

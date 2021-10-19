import {INCREMENT,DECREMENT} from './constant'

const iniState=0

export default function count_reducer(preState=iniState,action) {
    const{type,data}=action
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState
    }
}

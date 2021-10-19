import React, { Component } from 'react';
import store from '../../redux/store';
import {createIncrementAction,createDecrementAction} from '../../redux/count_action';
class Count extends Component {
    state={}
    increment=()=>{
        const{value}=this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement=()=>{
        const{value}=this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfODD=()=>{
        const count=store.getState()
        const{value}=this.selectNumber
        if(count%2===1)
            store.dispatch(createIncrementAction(value*1))
    }
    incrementAsync=()=>{
        const{value}=this.selectNumber
        // setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        // }, 800)
    }


    render() {
        return (
            <div>
                <h3>当前求和为：{store.getState()}</h3>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfODD}>incrementIfODD</button>&nbsp;
                <button onClick={this.incrementAsync}>incrementAsync</button>



            </div>
        );
    }
}

export default Count;
import {connect} from 'react-redux'
import {createDecrementAction,createIncrementAction} from '../../redux/count_action'
import React, { Component } from 'react';

class Count extends Component {
    state={}
    increment=()=>{
        const{value}=this.selectNumber
        this.props.increment(value*1)
    }
    decrement=()=>{
        const{value}=this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfODD=()=>{
        const{value}=this.selectNumber
        if(this.props.count%2===1)
            this.props.increment(value*1)
    }
    incrementAsync=()=>{
        const{value}=this.selectNumber
        setTimeout(() => {
            this.props.increment(value*1)
        }, 800);
    }


    render() {
        return (
            <div>
                <h3>当前求和为：{this.props.count}</h3>
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


export default  connect(
    state=>({count:state}),
    // dispatch=>({
    //     increment:(value)=>dispatch(createIncrementAction(value)),
    //     decrement:(value)=>dispatch(createDecrementAction(value)),
    // })

    //简写方式：
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
    }
    )(Count)
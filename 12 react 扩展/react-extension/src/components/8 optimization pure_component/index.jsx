// import React, { Component } from 'react';
import './index.css'
//也可以用pure component
import React, { PureComponent } from 'react';
export default class Parent extends PureComponent {
    state={carName:"Benz"}
    changeCar=()=>{
        this.setState({carName:'BMW'})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     if(this.state.carName===nextState.carName) return false
    //     else return true
    // }
    render() {
        console.log('Parent-render')
        const {carName}=this.state
        return (
            <div className='parent'>
                <h3>我是Parent, My car:{carName}</h3>
                <button onClick={this.changeCar}>Change Car</button>
                <Child carName={carName}/>
            </div>
        );
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     return !(this.props.carName===nextProps.carName)
    // }
    render() {
        console.log('Child-render')
        const {carName}=this.props
        return (
            <div className='child'>
                <h3>我是Child</h3>
                <span>I get the car named: {carName}</span>
            </div>
        );
    }
}
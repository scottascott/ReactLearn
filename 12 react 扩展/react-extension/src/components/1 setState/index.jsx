import React, { Component } from 'react';

class Demo extends Component {
    state={count:0}
    add=()=>{
        // 对象式的setState
        // const {count}=this.state
        // //setState第二个参数可以为一个回调函数
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count) //会在count+1后调用
        // })
        // // console.log(this.state.count)//会在count+1前调用

        // 函数式的setState
        this.setState((state,props)=>{
            console.log(state,props)
            return {count:state.count+1}
        })
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default Demo;
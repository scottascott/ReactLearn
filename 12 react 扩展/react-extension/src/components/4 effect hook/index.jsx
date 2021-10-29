import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
// import React from "react"
//类式组件
c// class Demo extends Component {
//     state={count:0}
//     add=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     componentDidMount(){
//         this.timer=setInterval(() => {
//             this.setState({count:this.state.count+1})
//         }, 1000);
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>点我卸载</button>
//             </div>
//         );
//     }
// }

// //函数式组件
function Demo(){
    const [count,setCount]=React.useState(0)
    function add(){
        // setCount(count+1)//第一种写法
        setCount(count=>count+1)
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    React.useEffect(()=>{
        let timer=setInterval(() => {
            setCount(count=>count+1)
        }, 1000);
        return ()=>{
            clearInterval(timer)
        }//return 里面函数相当于willunmount
    },[])//[]里是监测内容，变化就调用，比如[count],[count,name],不给[]的话相当于didmount,didupdate
    return (
        <div>  
            <h2>当前求和为：{count}</h2>
            <button onClick={(add)}>点我+1</button>
            <button onClick={unmount}>点我卸载</button>
        </div>
    )
}

export default Demo;
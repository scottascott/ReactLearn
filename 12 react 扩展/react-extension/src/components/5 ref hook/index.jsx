// import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import React from "react"

//类式组件
// class Demo extends Component {
//     state={count:0}
//     myRef=React.createRef()
//     add=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     show=()=>{
//         alert(this.myRef.current.value)
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
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>点我卸载</button>
//                 <button onClick={this.show}>点我提示数据</button>
//             </div>
//         );
//     }
// }

// //函数式组件
function Demo(){
    const [count,setCount]=React.useState(0)
    const myRef=React.useRef()
    function add(){
        // setCount(count+1)//第一种写法
        setCount(count=>count+1)
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show(){
        alert(myRef.current.value)
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
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={(add)}>点我+1</button>
            <button onClick={unmount}>点我卸载</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo;
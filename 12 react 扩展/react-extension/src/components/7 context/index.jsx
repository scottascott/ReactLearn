import React, { Component } from 'react';
import './index.css'

const UserNameContext=React.createContext()
const {Provider}=UserNameContext
export default class A extends Component {
    state={username:'Tom',age:18}
    render() {
        const {username,age}=this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是：{username}，年龄：{age}</h4>
                <Provider value={{username,age}}>
                    <B/>
                </Provider>
                
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <C/>
            </div>
        );
    }
}

// class C extends Component {
//     //需要声明
//     static contextType=UserNameContext
//     render() {
//         return (
//             <div className='grand'>
//                 <h3>我是C组件</h3>
//                 <h4>我的从A拿到的用户名是：{this.context.username}，年龄：{this.context.age}</h4>
                
//             </div>
//         );
//     }
// }

function C(){
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我的从A拿到的用户名是：
                <UserNameContext.Consumer>{
                    value=>{
                        return value.username+"，年龄："+value.age
                    }
                }</UserNameContext.Consumer>
            </h4>
            
        </div>
    )
}

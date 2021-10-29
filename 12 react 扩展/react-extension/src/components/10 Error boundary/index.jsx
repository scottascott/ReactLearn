import React, { Component } from 'react';
import A from './A';
class Demo extends Component {
    state={
        haserror:''//用于标识子组件是否有错误
    }

    static getDerivedStateFromError(error){
        return{haserror:error}
    }
    componentDidCatch(){
        console.log('统计错误，反馈给后台')
    }
    render() {
        return (
            <div>
                我是index的头
                {this.state.haserror?<h2>当前网络不稳定，请稍后再试</h2>:<A/>}
            </div>
        );
    }
}

export default Demo;
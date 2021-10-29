import React, { Component } from 'react';
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                我是Parent
                {/* <A>
                    <B/>
                </A> */}
                {/* 如果需要A给B传props: */}
                <A render={(name)=><B name={name}/>} />
            </div>
        );
    }
}

class A extends Component {
    state={name:'Tom'}
    render() {
        const{name}=this.state
        return (
            <div className='A'>
                我是A
                {/* <A>Hello!</A>标签体里面的hello在props的children里面 */}
                {/* 直接显示： */}
                {/* {this.props.children} */}
                {this.props.render(name)}
                
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='B'>
                我是B,name:{this.props.name}
            </div>
        );
    }
}
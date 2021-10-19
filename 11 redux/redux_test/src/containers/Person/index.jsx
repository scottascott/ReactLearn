import React, { Component } from 'react';
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {createAddPersonAction} from '../../redux/actions/person.js'
class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const personObj={id:nanoid(),name,age}
        this.props.addP(personObj)
    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <input ref={c=>this.nameNode=c} type="text" placeholder="输入名字"/>&nbsp;
                <input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄" />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.personInfo.map((p)=>{
                            return (
                                <li key={p.id}>名字：{p.name}年龄： {p.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default connect(
    state=>({personInfo:state.personInfo}),
    {
        addP:createAddPersonAction,
    }
)(Person)


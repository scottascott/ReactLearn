import React, { Component } from 'react';

class A extends Component {
    state={
        // user:[
        // {id:'001',name:'Tom',age:16},
        // {id:'002',name:'Alen',age:26},
        // {id:'003',name:'Eric',age:33},
        // ]
        user:'abc'
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.user.map((userObj)=>{
                        return <li key={userObj.id}>{userObj.name},age:{userObj.age}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default A;
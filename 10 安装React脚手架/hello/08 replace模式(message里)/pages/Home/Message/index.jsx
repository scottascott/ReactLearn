import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
import DetailedMessage from './DetailedMessage';

class Message extends Component {
    state={messages:[
        {id:"1",title:'消息1'},
        {id:"2",title:'消息2'},
        {id:"3",title:'消息3'}
    ]}
    render() {
        const {messages} = this.state
        return (
            <div>
                <ul>
                    {   
                        messages.map((messageObj)=>{
                            return (
                                <li key={messageObj.id}>
                                    {/* 传param参数 */}
                                    {/* <Link to={'/home/message/DetailedMessage/'+messageObj.id+'/'+messageObj.title}>{messageObj.title}</Link> */}
                                    {/* 传search参数 */}
                                    {/* <Link to={'/home/message/DetailedMessage/?id='+messageObj.id+'&title='+messageObj.title}>{messageObj.title}</Link> */}
                                    {/* 传state参数 */}
                                    <Link replace to={{pathname:'/home/message/DetailedMessage',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link> 
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 接受param参数 */}
                {/* <Route path='/home/message/DetailedMessage/:id/:title' component={DetailedMessage}/> */}
                {/* 接受search/state参数 */}
                <Route path='/home/message/DetailedMessage/' component={DetailedMessage}/>
            </div>
        );
    }
}

export default Message;
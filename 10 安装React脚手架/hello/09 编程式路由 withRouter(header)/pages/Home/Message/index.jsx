import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import DetailedMessage from './DetailedMessage';

class Message extends Component {
    state={messages:[
        {id:"1",title:'消息1'},
        {id:"2",title:'消息2'},
        {id:"3",title:'消息3'}
    ]}
    pushShow=(id,title)=>{
        // param传参编程式路由
        // this.props.history.push('/home/message/DetailedMessage/'+id+'/'+title)
        // state传参编程式路由
        this.props.history.push('/home/message/DetailedMessage/',{id,title})
    }
    replaceShow=(id,title)=>{
        // param传参编程式路由
        // this.props.history.replace('/home/message/DetailedMessage/'+id+'/'+title)
        // state传参编程式路由
        this.props.history.replace('/home/message/DetailedMessage/',{id,title})

    }
    back=()=>{
        this.props.history.goBack()
        // this.props.history.go(-1)
    }
    forward=()=>{
        this.props.history.goForward()
        // this.props.history.go(1)
    }
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
                                    {/* <Link to={{pathname:'/home/message/DetailedMessage',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>  */}
                                    <b>{messageObj.title}</b>
                                    &nbsp;<button onClick={()=>this.pushShow(messageObj.id,messageObj.title)}>push查看</button>
                                    &nbsp;<button onClick={()=>this.replaceShow(messageObj.id,messageObj.title)}>replace查看</button>
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
                &nbsp;<button onClick={this.back}>回退</button>
                &nbsp;<button onClick={this.forward}>前进</button>
            </div>
        );
    }
}

export default Message;
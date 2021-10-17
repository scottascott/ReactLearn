import React, { Component } from 'react';
//需要search传参时候用qs
// import qs from 'querystring'

//qs示例
// let obj={name:'tom',age:18}
// console.log(qs.stringify(obj))//输出name=tom&age=18
// let car='carName=奔驰&price=200'
// console.log(qs.parse(car))//输出{carName:'奔驰',price:"200"}

const detail=[
    {id:"1",content:'第一个消息'},
    {id:"2",content:'第二个消息'},
    {id:"3",content:'第三个消息'}
]
class DetailedMessage extends Component {
    render() {
        //接受param参数
        // const {id,title}=this.props.match.params
        //接受search参数
        // const {search}=this.props.location
        // 接受state参数
        const {id,title}=this.props.location.state||{}

        const findResult=detail.find((detailObj)=>{
            return detailObj.id=== id
        })||{}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        );
    }
}

export default DetailedMessage;
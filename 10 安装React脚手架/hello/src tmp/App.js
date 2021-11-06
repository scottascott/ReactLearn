import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import './App.less'
import {WechatFilled} from '@ant-design/icons'

export default class App extends Component {
    onChange=(date, dateString)=> {
        console.log(date, dateString);
    }
    render() {

        return (
            <div>
                app...
                &nbsp;<button>点我</button>
                &nbsp;<Button type="primary">Primary Button</Button>
                &nbsp;<WechatFilled/>
                &nbsp;<DatePicker onChange={this.onChange} />
            </div>
        )
    }
}

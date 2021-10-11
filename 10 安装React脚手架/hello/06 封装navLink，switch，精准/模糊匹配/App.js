import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'//路由组件
import About from './pages/About'
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'

import './App.css'
export default class App extends Component {

    render() {

        return (
            <div>
               <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生HTML通过<a>跳转页面
                        <a className="list-group-item" href="./about.html">About</a>
                        <a className="list-group-item active" href="./home.html">Home</a> */}
                        {/* 在React中靠路由链接实现切换组件 */}
                        <MyNavLink to='/about'>About</MyNavLink>
                        <MyNavLink to='/home'>Home</MyNavLink>
                        {/* <MyNavLink to='/home/a/b'>Home</MyNavLink> //也可以，这叫做模糊匹配 */}
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由，switch用于找到路由后不继续找，提升效率 */}
                            <Switch>
                                <Route path='/about' component={About}/>
                                <Route path='/home' component={Home}/>
                                {/* <Route exact path='/home' component={Home}/> */}
                                {/* <Route exact={true} path='/home' component={Home}/> 加了exact之后要精准匹配*/}
                            </Switch>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

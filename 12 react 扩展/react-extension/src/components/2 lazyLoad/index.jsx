import React, { Component, lazy ,Suspense} from 'react'
import {NavLink, Route} from 'react-router-dom'
// import Home from '../../pages/Home'//路由组件
// import About from '../../pages/About'

const Home=lazy(()=>import('../../pages/Home'))
const About=lazy(()=>import('../../pages/About'))

export default class App extends Component {

    render() {

        return (
            <div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生HTML通过<a>跳转页面
                        <a className="list-group-item" href="./about.html">About</a>
                        <a className="list-group-item active" href="./home.html">Home</a> */}
                        {/* 在React中靠路由链接实现切换组件 */}
                        <NavLink className="list-group-item" to='/about'>About</NavLink>
                        <NavLink className="list-group-item" to='/home'>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <Route path='/about' component={About}/>
                                <Route path='/home' component={Home}/>
                            </Suspense>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

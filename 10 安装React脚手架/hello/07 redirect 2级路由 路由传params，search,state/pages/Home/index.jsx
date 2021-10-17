import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import {Route,Switch, Redirect} from 'react-router-dom'
import News from './News';
import Message from './Message';

class Home extends Component {
    
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to='/home/news'>News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/home/message'>Message</MyNavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/message' component={Message}/>
                    <Redirect to='/home/news'/>
                </Switch>
            </div>
        );
    }
}

export default Home;
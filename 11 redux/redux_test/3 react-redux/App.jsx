import React, { Component } from 'react';
import Count from './containers/Count';
// import store from './redux/store';
class App extends Component {
    render() {
        return (
            <div>
                {/* <Count store={store}/> */}
                {/* 用了react-redux Provider之后会自动赋值store给需要的容器 */}
                <Count />
            </div>
        );
    }
}

export default App;


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import store from './redux/store'

//用react-redux的provider去自动给所有需要store的组件传递store
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

//如果用了react-redux，它的connect会自动监测，不用自己再监测了
// store.subscribe(()=>{
//     ReactDOM.render(<App/>,document.getElementById('root'))
// })
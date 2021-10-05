
/*import React from 'react'

class App extends React.Component{
    render(){
        return(
            <div>
                Hello,React!
            </div>

        )
    }
}

export default App
*/

import React,{Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }

}
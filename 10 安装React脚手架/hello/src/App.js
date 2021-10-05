
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
import axios from 'axios'

export default class App extends Component{
    getStudentData=()=>{
        axios.get
    }
    render(){
        return(
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        )
    }

}
import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios';

class Search extends Component {
    search=()=>{
        //获得输入值
        const {keyWordNode:{value:keyWrod}}=this//连续解构赋值+重命名
        PubSub.publish('userInfo',{isFirst:false,isLoading:true,err:''})

        // //发送请求
        axios.get('/search/users?q='+keyWrod).then(
            response=>{
                PubSub.publish('userInfo',{isLoading:false,users:response.data.items})
            },
            error=>{
                PubSub.publish('userInfo',{isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c=>this.keyWordNode=c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>    
            </div>
        );
    }
}

export default Search;
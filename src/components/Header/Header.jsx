import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import './Header.css'

export default class Header extends Component {

    getData = ()=>{
        const {inputButton:{value:keyword}} = this
        PubSub.publish('userdata', {isFirstTime:false, isLoading:true})
        axios({
                method:'GET',
                url:'https://api.github.com/search/users',
                params:{
                    q:keyword
                }
            }).then(
                response=>{
                    console.log(response.data.items)
                    PubSub.publish('userdata', {users:response.data.items, isLoading:false, isFirstTime:false})
                },
                error=>{
                    PubSub.publish('userdata', {err:error.message})
                }
        )
    }

    render() {
        console.log("??")
        return (
            <div className='search-container clearfix'>
                <h2 className='title'>Search github users</h2>
                <div className='search-area'>
                    <input ref = {(inputButton)=>{this.inputButton = inputButton}}  type="text" placeholder='Please enter the username'/>
                    <button onClick={this.getData}>Search</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './List.css'
export default class List extends Component {

    state = {
        users:[]
    }
    componentDidMount(){
        PubSub.subscribe('userdata',(msg, data)=>{
            console.log("data = ", data)
            this.setState({...data})
        })
        console.log(this.state.users)
    }

    render() {
        console.log("??")
        const {users} = this.state
        console.log("users = ", users)
        return (
            <div className='list-wrapper clearfix'>
            {
                users.map((userObj)=>{
                    return (
                        <div key={userObj.id} className='item'>
                            <a href={userObj.html_url} target='_blank' rel='noreferrer'>
                                <img  src={userObj.avatar_url} alt='profile' />
                            </a>
                            <span>{userObj.login}</span>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

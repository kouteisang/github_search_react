import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './List.css'
export default class List extends Component {

    state = {
        users:[],
        isLoading: true,
        isFirstTime: true,
        err:''
    }
    componentDidMount(){
        this.token = PubSub.subscribe('userdata',(msg, data)=>{
            console.log("datatest = ", data.users)
            this.setState({...data})
        })
        console.log(this.state.users)
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users, isFirstTime,isLoading, err} = this.state
        console.log("users = ", users)
        console.log('isLoading = ', isLoading)
        return (
            <div className='list-wrapper clearfix'>
            {
                isFirstTime ? <h2>Welcome! Please enter the username to search!</h2> :
                isLoading ? <h2>Loading ...</h2> : 
                err ? <h2>{err}</h2> :
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

import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='search-container clearfix'>
                <h2 className='title'>Search github users</h2>
                <div className='search-area'>
                    <input type="text" placeholder='Please enter the username'/>
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

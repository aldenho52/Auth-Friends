import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const AddFriend = (props) => {

    const handleChange = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value 
            }
            
        })
    }

    const createFriend = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                this.props.history.push('/protected')
                this.props.setLoggedIn(true);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
        <form onSubmit={createFriend}>
        <label>Name:
            <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={handleChange}
        />
        </label>
        <label>Email:
        <input
            type="email"
            name="email"
            value={this.state.credentials.email}
            onChange={handleChange}
            />
        </label>
        <label>Password:
        <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={handleChange}
            />
        </label>
            <button>Add Friend</button>
        </form>
        </div>
    )
}


export default AddFriend
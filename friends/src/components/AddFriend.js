import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState({
      id: Date.now(),
      username: '',
      email: '',
      password: ''
  })

    const handleChange = e => {
        // this.setState({
        //     credentials: {
        //     ...this.state.credentials,
        //     [e.target.name]: e.target.value 
        //     }
        // })
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const createFriend = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', newFriend)
            .then(res => {
                console.log(res)
                setFriends(res.data)
                props.history.push('/protected')
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
            value={newFriend.username}
            onChange={handleChange}
        />
        </label>
        <label>Email:
        <input
            type="email"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
            />
        </label>
        <label>Password:
        <input
            type="password"
            name="password"
            value={newFriend.password}
            onChange={handleChange}
            />
        </label>
            <button>Add Friend</button>
        </form>
        </div>
    )
}


export default AddFriend
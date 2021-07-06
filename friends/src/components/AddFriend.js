import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialFriend = {
    name: '',
    age: '',
    email: ''
}

const AddFriend = (props) => {
    const { setFriends} = props
    const { push } = useHistory()

    const [newFriend, setNewFriend] = useState(initialFriend)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', newFriend)
            .then(res => {
                console.log(res)
                setFriends(res.data)
                push('/protected')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label>Name:
            <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
        />
        </label>
        <label>Age:
        <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
            />
        </label>
        <label>Email:
        <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
            />
        </label>
            <button>Add Friend</button>
        </form>
        </div>
    )
}


export default AddFriend
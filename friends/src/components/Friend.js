import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const Friend = props => {
    const {friend, setFriends} = props

    const editFriend = () => {

    }

    const deleteFriend = () => {
        axiosWithAuth()
        .delete(`/friends/${friend.id}`)
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Age: {friend.age}</p>
            <div>
                <button onClick={editFriend}>Edit</button>
                <button onClick={deleteFriend}>Delete</button>
            </div>
        </div>
    )
}

export default Friend
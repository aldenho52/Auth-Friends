import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom';

const Friend = props => {
    const {friend, setFriends} = props
    const { push } = useHistory();


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
                <button onClick={() => {
                    push(`/edit-friend/${friend.id}`)
                }}>Edit</button>
                <button onClick={deleteFriend}>Delete</button>
            </div>
        </div>
    )
}

export default Friend
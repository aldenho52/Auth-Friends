import React, { useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'


const FriendList = (props) => {

    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            props.setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
        <Link to="/add_a_friend">Add Friend</Link>
        {props.friends.map(friend => {
            return <p key={friend.id}>{friend.name}</p>
        })}
        </div>
    )
}

export default FriendList

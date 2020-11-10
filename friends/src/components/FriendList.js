import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


const FriendList = () => {
    const [friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
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
        {friends.map(friend => {
            return <p key={friend.id}>{friend.name}</p>
        })}
        </div>
    )
}

export default FriendList

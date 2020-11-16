import React from 'react'
import { useHistory } from 'react-router-dom'
import Friend from './Friend'

const FriendList = (props) => {
const { friends, setFriends } = props
const { push } = useHistory();


    return (
        <div className='friendList'>
            <h1 className='title' >Friends</h1>
            <button className='addFriend-btn' onClick={()=>{push('/add-friend')}}>Add Friend</button>
        <div className='friends-container'>
        {friends.map(friend => {
            return <Friend key={friend.id} friend={friend} setFriends={setFriends}/>
        })}
        </div>
        </div>
    )
}

export default FriendList